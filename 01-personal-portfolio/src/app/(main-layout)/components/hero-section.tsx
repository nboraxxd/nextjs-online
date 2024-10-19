import Image from 'next/image'

import { cn } from '@/utils'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center pb-14 pt-8 sm:px-6 md:items-start md:pb-20 md:pt-32 lg:px-8">
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row-reverse">
        <div
          className={cn(
            'relative shrink-0',
            'after:absolute after:inset-0 after:-bottom-2 after:-z-10 after:rounded-full after:bg-secondary after:sm:-bottom-3'
          )}
        >
          <Image
            src="/images/avatar.jpg"
            alt="Someone"
            width={243}
            height={243}
            priority
            className="size-[170px] rounded-full object-cover md:size-[243px]"
          />
        </div>
        <div className="max-w-[506px]">
          <h1 className="text-balance text-bold-32 sm:text-bold-44">Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <Button className="mt-6 rounded-xs">Download Resume</Button>
    </section>
  )
}
