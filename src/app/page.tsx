import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page'
}

export default function Home() {
  return <div className="flex flex-col items-center gap-16 mt-40">
    <h1 className="font-bold text-2xl">
      <span className="text-yellow-300">Task Handler</span>
      : Elevate Your Task Management</h1>
    <div className="flex flex-col items-center gap-4">
      <p className="text-green-100">Effortlessly manage tasks with our intuitive application.</p>
      <p className="text-yellow-100">Simplify task organization and prioritize efficiently.</p>
      <p className="text-red-100">Seize control of deadlines, priorities, and collaboration.</p>
      <p className="text-cyan-100">Achieve more with streamlined task management.</p>
      <p className="text-purple-100">Join the task management revolution with Task Handler.</p>
    </div>

    <Link href='/auth' className="linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700 ">
      Authorize
    </Link>

  </div>
}
