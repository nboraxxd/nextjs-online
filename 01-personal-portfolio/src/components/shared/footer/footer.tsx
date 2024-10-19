import Link from 'next/link'
import { SOCIAL_LINKS } from '@/constants/list'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-14">
      <div className="flex items-center gap-9">
        {SOCIAL_LINKS.map((social) => {
          const IconComp = social.icon
          return (
            <Link
              key={social.id}
              href={social.href}
              className="inline-block p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComp />
              <span className="sr-only">{social.accessiblitityLabel}</span>
            </Link>
          )
        })}
      </div>
      <p className="mt-6 text-sm">Copyright ©2020 All rights reserved</p>
    </footer>
  )
}
