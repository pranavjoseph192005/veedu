'use client'

import React, { useState }from 'react'
import Link from 'next/link'

const Home = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  return <div>
    <Link
      href="/dashboard">
      Dashboard
    </Link>
    <button 
      onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
  </div>
}

export default Home