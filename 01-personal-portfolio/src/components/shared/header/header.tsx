import Link from 'next/link'
import { VercelLogoIcon } from '@radix-ui/react-icons'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Navbar } from '@/components/shared/header'
import { HamburgerIcon } from '@/components/icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="relative mx-auto flex h-header-height max-w-6xl items-center justify-center px-4 sm:justify-between sm:px-6 lg:px-16">
        <Link
          href="/"
          className="inline-block p-1.5 transition-transform hover:scale-110 hover:bg-transparent active:scale-105 sm:p-2.5"
        >
          <VercelLogoIcon className="size-6 text-primary" />
        </Link>
        <Navbar className="hidden sm:block" />
        <DropdownMenu>
          <DropdownMenuTrigger className="absolute right-4 ml-auto p-2.5 sm:hidden">
            <HamburgerIcon className="h-[18px]" />
            <span className="sr-only">Toggle Navigation</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-40 sm:hidden">
            <Navbar className="sm:hidden" isDropdown={true} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
