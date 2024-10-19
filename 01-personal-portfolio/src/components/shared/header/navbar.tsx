import Link from 'next/link'

import { NAVBAR_ITEMS } from '@/constants/list'
import { cn } from '@/utils'

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col sm:flex-row sm:gap-3">
        {NAVBAR_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                'inline-block w-full p-2.5 text-xl font-medium text-black',
                'rounded-sm outline-none transition-colors hover:bg-accent focus:bg-accent sm:hover:bg-transparent sm:focus:bg-transparent'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
