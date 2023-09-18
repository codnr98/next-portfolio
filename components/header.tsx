import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button'

const Header = () => {
  return (
    <header className="text-gray-600 body-font w-screen">
      <div className="flex justify-between p-5 items-center">
        <Link href="/" className="font-medium items-center text-gray-900">
          <span className="text-xl">codnr</span>
        </Link>
        <nav className="flex items-center text-base gap-4">
          <Link href="/" className="hover:text-gray-900">
            홈
          </Link>
          <Link href="projects" className="hover:text-gray-900">
            프로젝트
          </Link>
          <Link
            href="https://splendorous-cobbler-a3d6d8.netlify.app/"
            className="hover:text-gray-900"
          >
            Blog
          </Link>
          <DarkModeToggleButton />
        </nav>
      </div>
    </header>
  )
}
export default Header
