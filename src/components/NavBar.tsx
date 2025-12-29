import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

export function NavBar() {
    return (
        <nav className="w-full border-b border-b-brown-300 bg-brown-100">
            <div className="mx-auto flex items-center justify-between h-[48px] px-6 md:h-[80px] md:px-[120px] md:max-w-[1440px]">

                <img src={logo} alt="logo" />

                <div className="hidden md:flex items-center gap-8">
                    <button className="text-body-1 text-brown-600 border border-brown-400 rounded-full px-[40px] py-[12px] gap-6">
                        Log in
                    </button>
                    <button className="text-body-1 text-white bg-brown-400 rounded-full px-[40px] py-[12px] gap-6">
                        Sign up
                    </button>
                </div>
                <button className="md:hidden">
                    <img src={hamburger} alt="hamburger" className="w-[24px] h-[24px]"/>
                </button>
            </div>
        </nav>
    )
}