import PrivateLayout from '../src/components/Layout/PrivateLayout';
import Dashboard from '../src/components/Dashboard/Dashboard';
import { dashboardNav } from '../src/utlis/utils'

function Page() {
  return (
    <PrivateLayout menuItems={dashboardNav}>
      <Dashboard />
    </PrivateLayout>
  );
}

export default Page;