import React from 'react';
import PrivateLayout from '../src/components/Layout/PrivateLayout';
import Dashboard from '../src/components/Dashboard/Dashboard';
import ErrorBoundary from '../src/components/common/ErrorBoundary/ErrorBoundary';
import { dashboardNav } from '../src/utlis/utils';

function Page() {
  return (
    // Menu items pulled from utils for dashboard
    <ErrorBoundary>
      <PrivateLayout menuItems={dashboardNav}> 
        <Dashboard />
      </PrivateLayout>
    </ErrorBoundary>
  );
}

export default Page;