import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CatchRoute() {
  const router = useRouter();
  const { params } = router.query;
  return (
    <div>
      <h1>Test Catch Route</h1>
      <Link href={{
        pathname: '/catchRoute/[[...params]]',
        query: { params: params}
      }}>Link</Link>
    </div>
  )
}
