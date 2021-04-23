import React from 'react';
import PublicLayout from '../src/components/Layout/PublicLayout';
import LoginForm from '../src/components/LoginForm/LoginForm';
import ErrorBoundary from '../src/components/common/ErrorBoundary/ErrorBoundary';

function Page() {
  return (
    <ErrorBoundary>
      <PublicLayout>
        <div className="grid xl:grid-cols-2  h-screen">
          <div className="imgbackground" />
          <LoginForm />
        </div>
      </PublicLayout>
    </ErrorBoundary>
  );
}

export default Page;