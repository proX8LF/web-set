/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AXJswsRr69l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Cybersecurity Services
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <main className="flex-1 py-10 px-4 md:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Cybersecurity Fundamentals"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Cybersecurity Fundamentals</h3>
            <p className="text-muted-foreground mb-4">
              Learn the core concepts of cybersecurity, including network security, risk management, and incident
              response.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Ethical Hacking"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Ethical Hacking</h3>
            <p className="text-muted-foreground mb-4">
              Explore the world of ethical hacking and learn how to identify and mitigate security vulnerabilities.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Incident Response"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Incident Response</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to effectively respond to and mitigate cybersecurity incidents, including data breaches and
              malware attacks.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Network Security"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Network Security</h3>
            <p className="text-muted-foreground mb-4">
              Gain expertise in securing networks, including firewalls, VPNs, and intrusion detection systems.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Risk Management"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Risk Management</h3>
            <p className="text-muted-foreground mb-4">
              Develop skills in identifying, assessing, and mitigating cybersecurity risks for organizations.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Cloud Security"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Cloud Security</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to secure cloud-based infrastructure and applications, including best practices and compliance
              requirements.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              prefetch={false}
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p>
              123 Cyber Lane
              <br />
              Secure City, USA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@cybersecurityservices.com
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm">&copy; 2024 Cybersecurity Services. All rights reserved.</div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
