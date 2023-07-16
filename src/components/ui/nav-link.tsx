'use client'

import { cx } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  activeClass?: string
  className?: string
}
export default function NavLink({
  children,
  className,
  activeClass,
  href,
  ...attrs
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = href === pathname
  return (
    <Link
      href={href}
      className={cx(className, isActive && activeClass)}
      {...attrs}
    >
      {children}
    </Link>
  )
}
