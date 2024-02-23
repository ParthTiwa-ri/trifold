import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/background.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">TripFox: Ensuring your trip experience to be smooth and premium</p>
      <Link href="/dashboard" className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
  )
}
