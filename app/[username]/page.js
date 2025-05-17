// app/[username]/page.js

import PaymentPage from '@/components/PaymentPage';

export default async function UsernamePage({ params }) {
  const { username } = await params; // ✅ correctly destructured from awaited props

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}
