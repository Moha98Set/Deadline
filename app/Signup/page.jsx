import { Suspense } from 'react';
import SignupForm from './SingupForm';

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <SignupForm />
    </Suspense>
  );
}
