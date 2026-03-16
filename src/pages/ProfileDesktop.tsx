import { User, Lock } from "lucide-react";
import type { Tab } from "./ProfilePage";
import ProfileForm from "./ProfileForm";
import ResetPasswordForm from "./ResetPasswordForm";

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

function ProfileDesktop({ activeTab, setActiveTab }: Props) {
  return (
    <div className="min-h-screen bg-[#F7F6F3] px-20 py-12">
      <div className="flex gap-16">
        {/* Sidebar */}
        <aside className="w-48">
          <button onClick={() => setActiveTab("profile")} className="flex gap-2 mb-4">
            <User size={16} /> Profile
          </button>
          <button onClick={() => setActiveTab("password")} className="flex gap-2">
            <Lock size={16} /> Reset password
          </button>
        </aside>

        {/* Content */}
        <section className="flex-1 max-w-[520px]">
          <div className="bg-[#F1EFEA] rounded-3xl p-8">
            {activeTab === "profile" && <ProfileForm />}
            {activeTab === "password" && <ResetPasswordForm />}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfileDesktop;