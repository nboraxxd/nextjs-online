import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'

import { cn } from '@/utils'
import { FEATURED_WORKS } from '@/constants/list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'

export default function FeaturedWorksSection() {
  return (
    <section className="container py-8 sm:px-6 lg:px-8">
      <h2 className="text-normal-22">Featured works</h2>
      <div className="mt-6">
        {FEATURED_WORKS.map((work, index) => (
          <Fragment key={work.id}>
            <Card className="flex flex-col items-start gap-5 rounded-none border-none shadow-none md:flex-row">
              <div className="w-full shrink-0 xs:w-fit xs:self-center md:self-start">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={340}
                  height={230}
                  className="h-[230px] w-full rounded-md object-cover xs:h-[180px] xs:w-[246px]"
                />
              </div>
              <div>
                <CardHeader className="items-center space-y-3 p-0 md:items-start md:space-y-4">
                  <CardTitle className="text-2xl font-bold md:text-3xl">
                    <Link href="/works">{work.title}</Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-6">
                    <span className="rounded-2xl bg-accent-foreground px-2.5 py-0.5 text-normal-18 !font-black text-background">
                      {work.date}
                    </span>
                    <span className="text-xl text-light">{work.type}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-5 p-0 md:mt-8">
                  <p className="line-clamp-5">{work.description}</p>
                </CardContent>
              </div>
            </Card>
            <Separator className={cn('my-6 md:my-8', { 'mb-0 md:mb-0': index === FEATURED_WORKS.length - 1 })} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
