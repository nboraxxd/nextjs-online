import Link from 'next/link'

import { NAVBAR_ITEMS } from '@/constants/list'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export default function Navbar({ isDropdown = false, className }: { isDropdown?: boolean; className?: string }) {
  const itemClassName = 'inline-block w-full cursor-pointer p-2.5 text-xl font-medium text-black'

  return (
    <nav className={className}>
      <ul className="flex flex-col sm:flex-row sm:gap-3">
        {NAVBAR_ITEMS.map(({ href, label }) => (
          <li key={href}>
            {isDropdown ? (
              <DropdownMenuItem asChild className={itemClassName}>
                <Link href={href}>{label}</Link>
              </DropdownMenuItem>
            ) : (
              <Link href={href} className={itemClassName}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
