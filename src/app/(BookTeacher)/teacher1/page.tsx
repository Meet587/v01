import Link from "next/link";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function BookTeacher() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <PencilIcon className="h-6 w-6" />
                    <span className="sr-only">Tutorly</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Find Tutors
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
                                        Connect with Expert Tutors
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect Tutor</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Search and filter through our extensive database of expert tutors. Find the perfect match for your
                                    learning needs.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Select id="subject">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="math">Math</SelectItem>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="science">Science</SelectItem>
                                            <SelectItem value="history">History</SelectItem>
                                            <SelectItem value="computer-science">Computer Science</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <label htmlFor="grade" className="text-sm font-medium">
                                            Grade
                                        </label>
                                        <Select id="grade">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select grade" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="elementary">Elementary</SelectItem>
                                                <SelectItem value="middle-school">Middle School</SelectItem>
                                                <SelectItem value="high-school">High School</SelectItem>
                                                <SelectItem value="college">College</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="rating" className="text-sm font-medium">
                                            Minimum Rating
                                        </label>
                                        <Select id="rating">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select rating" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="4">4 stars and above</SelectItem>
                                                <SelectItem value="3">3 stars and above</SelectItem>
                                                <SelectItem value="2">2 stars and above</SelectItem>
                                                <SelectItem value="1">1 star and above</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button type="submit">Search Tutors</Button>
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Advanced Filters
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg"
                                alt="Search"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                width="550"
                                height="310"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from our satisfied students about their experiences with our expert tutors.
                                </p>
                            </div>
                            <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                                <Card className="p-6 bg-muted rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className="font-bold">John Doe</div>
                                                <div className="text-sm text-muted-foreground">High School Student</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">
                                        "My tutor has been amazing! They really helped me\n understand the material and improve my grades.
                                        Highly\n recommend Tutorly!"
                                    </p>
                                </Card>
                                <Card className="p-6 bg-muted rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>SA</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className="font-bold">Sarah Anderson</div>
                                                <div className="text-sm text-muted-foreground">College Student</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">
                                        "I was struggling with my math class, but my tutor\n really helped me understand the concepts. I'm
                                        so\n grateful for their patience and expertise."
                                    </p>
                                </Card>
                                <Card className="p-6 bg-muted rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>MJ</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className="font-bold">Michael Johnson</div>
                                                <div className="text-sm text-muted-foreground">Middle School Student</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                                <StarIcon className="h-4 w-4 text-yellow-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">
                                        "I\'ve been using Tutorly for a few months now, and it\'s\n been a game-changer for my learning. The
                                        tutors are\n amazing!"
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Book a session with an expert tutor and take your learning to the next level.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex gap-2">
                                    <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                    <Button type="submit">Get Started</Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By signing up, you agree to our{" "}
                                    <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                        Terms of Service
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 Tutorly. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                </nav>
            </footer>
        </div>
    );
}

function PencilIcon(props: any) {
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
    );
}


function StarIcon(props: any) {
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
    );
}
