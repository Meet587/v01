import Link from "next/link"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function BookTracher2() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">Student Marketplace</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Find Teachers
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Become a Teacher
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
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
                    Unlock Your Potential with Expert Tutors
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the best tutors for your academic needs. Book personalized sessions and unlock your full
                    potential.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Find Tutors
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
              <div className="bg-muted rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
                <form className="grid gap-4">
                  <Select>
                    <SelectTrigger className="h-auto">
                      <SelectValue
                        placeholder={
                          <div className="flex flex-col items-start">
                            <span className="font-semibold uppercase text-[0.65rem]">Subject</span>
                            <span className="font-normal">Select Subject</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Math</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                        <span className="font-normal">Select Date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">Time</span>
                        <span className="font-normal">Select Time</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <div className="grid grid-cols-3 gap-2 p-4">
                        <Button variant="outline" size="sm">
                          9:00 AM
                        </Button>
                        <Button variant="outline" size="sm">
                          10:00 AM
                        </Button>
                        <Button variant="outline" size="sm">
                          11:00 AM
                        </Button>
                        <Button variant="outline" size="sm">
                          1:00 PM
                        </Button>
                        <Button variant="outline" size="sm">
                          2:00 PM
                        </Button>
                        <Button variant="outline" size="sm">
                          3:00 PM
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Button size="lg" className="w-full h-12">
                    Book Session
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Find the Best Tutors</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Experts in Your Subject</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our directory of highly qualified tutors across a wide range of subjects. Find the perfect
                  match for your learning needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="bg-background rounded-lg shadow-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Math Tutor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                  <span>4.8 (125 reviews)</span>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    John is a highly experienced math tutor with a passion for helping students excel. He has a proven
                    track record of improving test scores and building strong foundations in mathematics.
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">Available Mon-Fri, 9am-5pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WalletIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">$50/hr</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Book Session
                </Button>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Sarah Adams</h3>
                    <p className="text-sm text-muted-foreground">English Tutor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                  <span>4.6 (92 reviews)</span>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Sarah is a passionate English tutor with a focus on improving writing skills, grammar, and reading
                    comprehension. She has helped many students achieve their academic goals.
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">Available Tue-Sat, 10am-6pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WalletIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">$45/hr</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Book Session
                </Button>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Michael Kim</h3>
                    <p className="text-sm text-muted-foreground">Science Tutor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                  <span>4.7 (105 reviews)</span>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Michael is an experienced science tutor with a deep understanding of biology, chemistry, and
                    physics. He excels at breaking down complex concepts and helping students develop a strong
                    foundation in the sciences.
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">Available Mon-Wed, 3pm-8pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WalletIcon className="w-4 h-4" />
                    <span className="text-muted-foreground">$55/hr</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Potential with Our Platform
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our student marketplace offers a wide
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
