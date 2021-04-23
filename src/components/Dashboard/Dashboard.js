import React, { useEffect } from 'react';
import Pagination from '../common/Pagination/Pagination';
import withAuth from '../../services/withAuth';

function Dashboard() {
  const [rows, setRows] = React.useState([]);
  
  //getting random user data to populate on dashboard
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      setRows([...data.results]);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return rows && (
    <Pagination rows={rows} />
  );
}

// Protected page using localstrogae accecss token if available then view this page
export default withAuth(Dashboard);