import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">이채욱의 포트폴리오</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            홈
          </Link>
          <Link href="projects" className="mr-5 hover:text-gray-900">
            프로젝트
          </Link>
          <Link href="about-me" className="mr-5 hover:text-gray-900">
            연락하기
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  )
}
export default Header
