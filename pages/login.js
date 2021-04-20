import PublicLayout from '../src/components/Layout/PublicLayout';
import LoginForm from '../src/components/LoginForm/LoginForm';

function Page() {
  return (
    <PublicLayout>
      <div className="grid xl:grid-cols-2  h-screen">
        <div className="imgbackground" />
        <LoginForm />
      </div>
    </PublicLayout>
  );
}

export default Page;