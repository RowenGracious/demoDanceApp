import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '../LoginForm/LoginForm';

// snapshot testing for login
test('Login form component', () => {
  const component = renderer.create(
    <LoginForm />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Puppeteer testing for login

const puppeteer = require('puppeteer');

let browser
let page

beforeAll(async () => {
  // launch browser 
  browser = await puppeteer.launch(
    {
      headless: true, // headless mode set to false so browser opens up with visual feedback
      slowMo: 0, // how slow actions should be
      defaultViewport : { width : 1200, height : 768 }
    }
  )
  // creates a new page in the opened browser   
  page = await browser.newPage()
})

describe('Successfull Login', () => {
  test('with uppercase email address', async () => {
    await page.goto('http://localhost:3000/')

    const [button] = await page.$x("//a[contains(., 'Login')]");
    if (button) {
        await button.click();
    }
    
    await page.waitForSelector('.mx-auto #emailID')
    await page.type('#emailID', 'JOEDOE@YOPMAIL.COM');
    
    await page.waitForSelector('.mx-auto #password')
    await page.type('#password', 'JoeDoe@12345');
    
    const [signIn] = await page.$x("//button[contains(., 'Continue')]");
    if (signIn) {
        await signIn.click();
    }

    await page.waitForSelector('.makeStyles-root-2 > .MuiButtonBase-root:nth-child(3) > .MuiIconButton-label > .MuiSvgIcon-root > path')
    
    const [logout] = await page.$x("//a[contains(., 'Logout')]");
    if (logout) {
        await logout.click();
    }

    await page.$x("//a[contains(., 'Home')]");

  });
  
  test('with lowercase email address', async () => {
    await page.goto('http://localhost:3000/')

    const [button] = await page.$x("//a[contains(., 'Login')]");
    if (button) {
        await button.click();
    }
    
    await page.waitForSelector('.mx-auto #emailID')
    await page.type('#emailID', 'joedoe@yopmail.com');
    
    await page.waitForSelector('.mx-auto #password')
    await page.type('#password', 'JoeDoe@12345');
    
    const [signIn] = await page.$x("//button[contains(., 'Continue')]");
    if (signIn) {
        await signIn.click();
    }

    await page.waitForSelector('.makeStyles-root-2 > .MuiButtonBase-root:nth-child(3) > .MuiIconButton-label > .MuiSvgIcon-root > path')
    
    const [logout] = await page.$x("//a[contains(., 'Logout')]");
    if (logout) {
        await logout.click();
    }

    await page.$x("//a[contains(., 'Home')]");
  });
});

describe('Unsuccessfull Login', () => {
  test('with incorrect email address', async () => {
    // event listener to catch alertbox and dismiss the alert
    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await page.goto('http://localhost:3000/')

    const [button] = await page.$x("//a[contains(., 'Login')]");
    if (button) {
        await button.click();
    }
    
    await page.waitForSelector('.mx-auto #emailID')
    await page.type('#emailID', 'joedoe123@yopmail.com');
    
    await page.waitForSelector('.mx-auto #password')
    await page.type('#password', 'JoeDoe123@12345');
    
    const [signIn] = await page.$x("//button[contains(., 'Continue')]");
    if (signIn) {
        await signIn.click();
    }

  });
});
// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})