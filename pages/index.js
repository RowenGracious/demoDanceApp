import React from 'react';
import LandingLayout from '../src/components/Layout/LandingLayout';
import DanceForms from '../src/components/DanceForms/DanceForms';
import ErrorBoundary from '../src/components/common/ErrorBoundary/ErrorBoundary';
import { navigation } from '../src/utlis/utils';

function Page() {
  return (
    // Menu items pulled from utils for dashboard
    <ErrorBoundary>
      <LandingLayout menuItems={navigation}>
        <DanceForms />
      </LandingLayout>
    </ErrorBoundary>
  );
}
export default Page;