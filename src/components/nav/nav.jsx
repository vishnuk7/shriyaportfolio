import Logo from './logo'
import NavItems from './nav-item'
import CONSTANTS from '@/utils/constants/';


export default function NavList() {
    return (
        <nav className="nav-bg border-gray-200 py-6 mb-16">
            <div className='flex  items-center justify-between  mx-6'>
                <Logo />
                {/* for resposive code */}
                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button> */}
                <div className="">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            {
                                CONSTANTS.NAV_LIST.map(d => <NavItems key={new Date()} text={d} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}