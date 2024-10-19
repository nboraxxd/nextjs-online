import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Navbar } from '@/components/shared/header'
import { HamburgerIcon } from '@/components/icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="mx-auto flex h-header-height max-w-6xl items-center justify-end px-4 sm:px-16">
        <Navbar className="hidden sm:block" />
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2.5 sm:hidden">
            <HamburgerIcon className="h-[18px]" />
            <span className="sr-only">Toggle Navigation</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-40">
            <Navbar className="sm:hidden" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
