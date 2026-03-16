import { User, Lock } from "lucide-react";
import type { Tab } from "./ProfilePage";
import ProfileForm from "./ProfileForm";
import ResetPasswordForm from "./ResetPasswordForm";

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

function ProfileMobile({ activeTab, setActiveTab }: Props) {
  return (
    <div className="min-h-screen bg-[#F7F6F3] flex justify-center py-10">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6">
        {/* Tabs */}
        <div className="flex gap-6 text-sm border-b pb-3 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={activeTab === "profile" ? "font-medium border-b-2 border-black" : "text-gray-400"}
          >
            <User size={16} /> Profile
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={activeTab === "password" ? "font-medium border-b-2 border-black" : "text-gray-400"}
          >
            <Lock size={16} /> Reset password
          </button>
        </div>

        {activeTab === "profile" && <ProfileForm />}
        {activeTab === "password" && <ResetPasswordForm />}
      </div>
    </div>
  );
}

export default ProfileMobile;