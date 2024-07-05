/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EifEq2TZcl1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:py-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            WorknHire
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Find Jobs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Companies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="hidden md:inline-flex">Post a Job</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Find your dream job</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Search and apply for the best job opportunities in your field.
              </p>
              <form className="flex items-center bg-primary-foreground rounded-full py-2 px-4 space-x-2">
                <SearchIcon className="w-6 h-6 text-primary" />
                <Input type="text" placeholder="Search for jobs..." className="flex-1 bg-transparent outline-none" />
                <Button className="rounded-full px-6 py-2">Search</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
                <p className="text-muted-foreground">Explore the latest job opportunities from top companies.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <img src="/placeholder.svg" width={80} height={80} alt="Company Logo" className="rounded-full" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span>Acme Inc.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPinIcon className="w-5 h-5" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <DollarSignIcon className="w-5 h-5" />
                      <span>$120,000 - $150,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img src="/placeholder.svg" width={80} height={80} alt="Company Logo" className="rounded-full" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Product Manager</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span>Acme Inc.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPinIcon className="w-5 h-5" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <DollarSignIcon className="w-5 h-5" />
                      <span>$90,000 - $120,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <img src="/placeholder.svg" width={80} height={80} alt="Company Logo" className="rounded-full" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Marketing Coordinator</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span>Acme Inc.</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPinIcon className="w-5 h-5" />
                      <span>Chicago, IL</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <DollarSignIcon className="w-5 h-5" />
                      <span>$50,000 - $70,000</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Browse by Job Category</h2>
                <p className="text-muted-foreground">Explore job opportunities in your desired field.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <BriefcaseIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">Engineering</span>
                </Link>
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <CodeIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">IT & Software</span>
                </Link>
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <UsersIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">Human Resources</span>
                </Link>
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <ClipboardIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">Administrative</span>
                </Link>
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <ApertureIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">Design</span>
                </Link>
                <Link
                  href="#"
                  className="flex flex-col items-center space-y-2 bg-background p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                >
                  <BriefcaseIcon className="w-8 h-8" />
                  <span className="text-sm font-medium">Marketing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8 px-6 md:py-12 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-lg font-bold">WorknHire</div>
          <nav className="flex items-center space-x-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Find Jobs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Companies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ApertureIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </svg>
  )
}


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
