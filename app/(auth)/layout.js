import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div><div className="navbar bg-base-200">
    <Link href="/" className="btn btn-ghost text-xl">HomePage</Link>
  </div>{children}</div>
  )
}
