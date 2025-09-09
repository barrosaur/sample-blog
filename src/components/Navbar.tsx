import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/styles/Navbar.css'

const Navbar = () => {
  const imgSize = 35;

  return (
    <nav>
      <Link href="/Users">
        <Image
          src="/User.svg"
          width={imgSize}
          height={imgSize}
          alt='User'
        />
      </Link>
      <Link href="/Blogs">
        <Image
          src="/blogs.svg"
          width={imgSize}
          height={imgSize}
          alt='Blogs'
        />
      </Link>
      <Link href="/Profile">
        <Image
          src="/profiles.svg"
          width={imgSize}
          height={imgSize}
          alt='Profile'
        />
      </Link>
      <div className="settings-container">
        <Link href="/Settings">
          <Image
            src="/settings.svg"
            width={imgSize}
            height={imgSize}
            alt='Settings'
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar