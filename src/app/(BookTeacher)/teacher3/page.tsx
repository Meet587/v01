/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qHcNARUsARg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function BookTeacher3() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PencilIcon className="h-6 w-6" />
          <span className="sr-only">Tutorly</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Find a Tutor
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Become a Tutor
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find the Perfect Tutor for You
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse our marketplace of experienced tutors and book sessions to achieve your learning goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Find a Tutor
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Become a Tutor
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Tutors</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of top-rated tutors across a variety of subjects and skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Tutor Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Math Tutor</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    John is an experienced math tutor with a passion for helping students excel. He has a proven track
                    record of improving test scores and building strong foundations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Tutor Avatar" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <CardTitle>Sarah Anderson</CardTitle>
                  <CardDescription>English Tutor</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Sarah is a passionate English tutor with years of experience helping students improve their writing,
                    reading, and communication skills. She tailors her approach to each student's needs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Tutor Avatar" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <CardTitle>Lisa Martinez</CardTitle>
                  <CardDescription>Science Tutor</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Lisa is an expert science tutor with a deep understanding of biology, chemistry, and physics. She
                    uses hands-on activities and real-world examples to make learning engaging and effective.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Browse by Subject</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find tutors in a wide range of subjects, from math and science to language and the arts.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Math
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  English
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Science
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  History
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Languages
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Arts
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from some of our satisfied students about their experiences with our tutors.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                <Card className="flex flex-col">
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="Student Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">John Doe</p>
                          <p className="text-sm text-muted-foreground">High School Student</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "My tutor, Sarah, has been amazing. She really\n helped me improve my writing and prepare for
                        the\n SAT. I couldn't have done it without her."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="Student Avatar" />
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">Sarah Anderson</p>
                          <p className="text-sm text-muted-foreground">College Student</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "I was struggling with my calculus class, but my\n tutor, Lisa, really helped me understand
                        the\n concepts. She's patient and explains things in a way\n that makes sense."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="Student Avatar" />
                          <AvatarFallback>LM</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}
