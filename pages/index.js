import LandingLayout from '../src/components/Layout/LandingLayout';
import DanceForms from '../src/components/DanceForms/DanceForms';
import { navigation } from '../src/utlis/utils'

function Page() {
  return (
    <LandingLayout menuItems={navigation}>
      <DanceForms />
    </LandingLayout>
  );
}
export default Page;