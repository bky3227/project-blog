import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, LogOut, Bell, ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { useAuth } from '@/context/auth';

export function NavBar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const isAuthenticated = !!user;

    const handleLogout = () => {
        logout(); // ให้ context จัดการ
        navigate("/");
    };

    return (
        <nav className="w-full border-b border-b-brown-300 bg-brown-100">
            <div className="mx-auto flex items-center justify-between h-[48px] px-6 md:h-[80px] md:px-[120px] md:max-w-[1440px]">

                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img src={logo} alt="logo" className="cursor-pointer" />
                </Link>

                {/* ✅ Desktop */}
                {!isAuthenticated ? (
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/login"
                            className="text-body-1 text-brown-600 border border-brown-400 rounded-full px-[40px] py-[12px]"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/signup"
                            className="text-body-1 text-white bg-brown-400 rounded-full px-[40px] py-[12px]"
                        >
                            Sign up
                        </Link>
                    </div>
                ) : (
                    <UserDesktopMenu handleLogout={handleLogout} />
                )}

                {/* ✅ Mobile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="md:hidden p-2">
                            <img src={hamburger} alt="hamburger" className="w-[24px] h-[24px]" />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-screen md:hidden p-6 rounded-3xl outline-none border-none bg-white"
                    >
                        {!isAuthenticated ? (
                            <>
                                <DropdownMenuItem
                                    className="w-full h-[56px] rounded-full border border-black flex items-center justify-center text-base text-black"
                                    onClick={() => navigate("/login")}
                                >
                                    Log in
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    className="w-full h-[56px] rounded-full border border-black flex items-center justify-center text-base text-white bg-black mt-4"
                                    onClick={() => navigate("/signup")}
                                >
                                    Sign up
                                </DropdownMenuItem>
                            </>
                        ) : (
                            <UserMobileMenu handleLogout={handleLogout} />
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default NavBar;

function UserMenuItems({
    handleLogout,
    isAdmin,
}: {
    handleLogout: () => void;
    isAdmin?: boolean;
}) {

    const navigate = useNavigate();

    return (
        <>
            <DropdownMenuItem
                onClick={() => navigate("/profile")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
            >
                <User size={18} />
                <span>Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem
                onClick={() => navigate("/admin/reset-password")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
            >
                <Lock size={18} />
                <span>Reset password</span>
            </DropdownMenuItem>

            {isAdmin && (
                <DropdownMenuItem
                    onClick={() => navigate("/admin/article")}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
                >
                    <SquareArrowOutUpRight size={18} />
                    <span>Admin panel</span>
                </DropdownMenuItem>
            )}

            <div className="my-2 h-px bg-gray-200" />

            <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 cursor-pointer"
            >
                <LogOut size={18} />
                <span>Log out</span>
            </DropdownMenuItem>
        </>
    );
}

function UserDesktopMenu({ handleLogout }: { handleLogout: () => void }) {
    const { user } = useAuth();

    return (
        <div className="hidden md:flex items-center gap-6">
            <button className="relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-brown-600">
                        {user?.username}
                    </span>
                    <ChevronDown size={16} />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-[220px] rounded-2xl p-2 bg-white shadow-md"
                >
                    <UserMenuItems
                        handleLogout={handleLogout}
                        isAdmin={user?.role === "admin"}
                    />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

function UserMobileMenu({ handleLogout }: { handleLogout: () => void }) {
    const { user } = useAuth();

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">
                        {user?.username}
                    </span>
                </div>

                <button className="p-1 rounded-full hover:bg-gray-100">
                    <Bell size={18} />
                </button>
            </div>

            <UserMenuItems
                handleLogout={handleLogout}
                isAdmin={user?.role === "admin"}
            />
        </div>
    );
}


