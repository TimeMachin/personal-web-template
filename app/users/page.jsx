import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { Suspense } from "react";

export const metadata = {
    title: {
        default: 'Users Page'
    }
};

async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data: Users } = await supabase.from('Users').select("*")

  console.log('Users 2 Data:', Users)
    return (
    <div className="flex flex-col items-center justify-center py-2 text-white">
      <ul>
        {Users?.map((user) => (
          <li key={user.id}>{user.name} - {user.type}</li>
        ))}
      </ul>
    </div>
  )
}
export default function Users() {
  return (
    <Suspense fallback={<div className="text-white">Loading instruments...</div>}>
      <Page />
    </Suspense>
  );
}