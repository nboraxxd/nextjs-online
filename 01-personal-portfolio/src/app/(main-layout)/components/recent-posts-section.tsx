import Link from 'next/link'

import { cn } from '@/utils'
import { RECENT_POSTS } from '@/constants/list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RecentPostsSection() {
  return (
    <section className="bg-secondary py-8">
      <div className="container sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between">
          <h2 className="text-normal-22">Recent posts</h2>
          <Link href="/blogs" className="hidden p-1 pr-0 text-secondary-foreground sm:inline-block">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {RECENT_POSTS.map((post) => (
            <Card key={post.id} className="rounded border-none shadow-card">
              <CardHeader className="space-y-3 pb-5 md:space-y-4">
                <CardTitle className={cn('line-clamp-2 text-normal-22 font-bold md:text-bold-26', '!leading-tight')}>
                  {post.title}
                </CardTitle>
                <CardDescription className="md:text-normal-18">
                  <span>{post.date}</span> |{' '}
                  <span>{post.tags.map((tag, index) => (index === post.tags.length - 1 ? tag : `${tag}, `))}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 md:px-6">
                <p className="line-clamp-5">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
