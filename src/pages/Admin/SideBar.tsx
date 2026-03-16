import {
  FileText,
  Folder,
  User,
  Bell,
  KeyRound,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
};

function SideBar() {
  return (
    <aside className="flex w-72 flex-col justify-between bg-[#EFEDE8] p-6">
      <div>
        {/* Logo */}
        <div className="mb-10">
          <img src={logo} alt="hh logo" className="h-8 object-contain" />
          <p className="mt-1 text-sm text-orange-500">Admin panel</p>
        </div>

        {/* Menu */}
        <nav className="space-y-2 text-sm">
          <MenuItem
            icon={<FileText size={18} />}
            label="Article management"
            to="/admin/article"
          />
          <MenuItem
            icon={<Folder size={18} />}
            label="Category management"
            to="/admin/category"
          />
          <MenuItem
            icon={<User size={18} />}
            label="Profile"
            to="/admin/profile"
          />
          <MenuItem
            icon={<Bell size={18} />}
            label="Notification"
            to="/admin/notification"
          />
          <MenuItem
            icon={<KeyRound size={18} />}
            label="Reset password"
            to="/admin/reset-password"
          />
        </nav>
      </div>

      {/* Bottom */}
      <div className="text-sm">
        <a
          href="/"
          className="flex cursor-pointer items-center gap-2 border-b border-gray-300 px-2 py-3 text-gray-600"
        >
          <ExternalLink size={18} />
          <span>hh. website</span>
        </a>

        <div className="flex cursor-pointer items-center gap-2 px-2 py-3 text-gray-600">
          <LogOut size={18} />
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

function MenuItem({ icon, label, to }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 transition ${
          isActive
            ? "bg-brown-100 font-medium text-black"
            : "text-gray-600 hover:bg-white/60"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}