import { useState } from "react";
import { User, Lock, Upload } from "lucide-react";
import NavBar from "@/components/NavBar";


type Tab = "profile" | "password";

function Profile() {
    return (
    <>
    <NavBar />
      <div className="md:hidden">
        <ProfileMo />
      </div>
        <div className="hidden md:block">
        <ProfileDesk />
      </div>
    </>
  );
}  

export default Profile;


function ProfileMo() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    <div className="min-h-screen bg-[#F7F6F3] flex justify-center py-10">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6">
        {/* Tabs */}
        <div className="flex gap-6 text-sm border-b pb-3 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-2 pb-2 ${
              activeTab === "profile"
                ? "text-black font-medium border-b-2 border-black"
                : "text-gray-400"
            }`}
          >
            <User size={16} />
            Profile
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={`flex items-center gap-2 pb-2 ${
              activeTab === "password"
                ? "text-black font-medium border-b-2 border-black"
                : "text-gray-400"
            }`}
          >
            <Lock size={16} />
            Reset password
          </button>
        </div>

        {/* ===== PROFILE TAB ===== */}
        {activeTab === "profile" && (
          <>
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <User size={18} className="text-gray-500" />
              <span className="font-medium">Moodeng ja</span>
              <span className="ml-2 font-semibold">Profile</span>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-28 h-28 rounded-full bg-gray-400 flex items-center justify-center mb-4">
                <User size={42} className="text-white" />
              </div>

              <button className="flex items-center gap-2 px-5 py-2 border rounded-full text-sm hover:bg-gray-50">
                <Upload size={16} />
                Upload profile picture
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500">Name</label>
                <input
                  type="text"
                  defaultValue="Moodeng ja"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">Username</label>
                <input
                  type="text"
                  defaultValue="moodeng.cute"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Email</label>
                <input
                  type="email"
                  value="moodeng.cute@gmail.com"
                  disabled
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-gray-100 text-gray-400"
                />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 rounded-full bg-black text-white text-sm">
              Save
            </button>
          </>
        )}

        {/* ===== RESET PASSWORD TAB ===== */}
        {activeTab === "password" && (
          <>
            <div className="flex items-center gap-2 mb-6">
              <Lock size={18} className="text-gray-500" />
              <span className="font-semibold">Reset password</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500">Current password</label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">New password</label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Confirm new password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 rounded-full bg-black text-white text-sm">
              Update password
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export {ProfileMo};

function ProfileDesk() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    // ===== OUTER: จัดกึ่งกลางหน้าจอ =====
    <div className="min-h-screen bg-[#F7F6F3] flex justify-center py-12">
      {/* ===== INNER: ของเดิมทั้งหมด ===== */}
      <div className="w-full max-w-5xl px-20">
        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="font-medium">Moodeng ja</span>
          <span className="font-semibold">| Profile</span>
        </div>

        <div className="flex gap-16">
          {/* ===== Sidebar ===== */}
          <aside className="w-48">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 mb-4 text-sm ${
                activeTab === "profile"
                  ? "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              <User size={16} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("password")}
              className={`flex items-center gap-2 text-sm ${
                activeTab === "password"
                  ? "text-black font-medium"
                  : "text-gray-400"
              }`}
            >
              <Lock size={16} />
              Reset password
            </button>
          </aside>

          {/* ===== Content ===== */}
          <section className="flex-1 max-w-[520px]">
            <div className="bg-[#F1EFEA] rounded-3xl p-8">
              {/* ===== PROFILE TAB ===== */}
              {activeTab === "profile" && (
                <>
                  {/* Avatar */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center">
                      <User size={36} className="text-white" />
                    </div>

                    <button className="flex items-center gap-2 px-5 py-2 border rounded-full text-sm bg-white">
                      <Upload size={16} />
                      Upload profile picture
                    </button>
                  </div>

                  <hr className="mb-6" />

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500">Name</label>
                      <input
                        type="text"
                        defaultValue="Moodeng ja"
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">Username</label>
                      <input
                        type="text"
                        defaultValue="moodeng.cute"
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Email</label>
                      <input
                        type="email"
                        value="moodeng.cute@gmail.com"
                        disabled
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-gray-100 text-gray-400"
                      />
                    </div>
                  </div>

                  <button className="mt-8 px-8 py-2 rounded-full bg-black text-white text-sm">
                    Save
                  </button>
                </>
              )}

              {/* ===== RESET PASSWORD TAB ===== */}
              {activeTab === "password" && (
                <>
                  <div className="mb-6 font-semibold">Reset password</div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500">
                        Current password
                      </label>
                      <input
                        type="password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">
                        New password
                      </label>
                      <input
                        type="password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-white"
                      />
                    </div>
                  </div>

                  <button className="mt-8 px-8 py-2 rounded-full bg-black text-white text-sm">
                    Update password
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export { ProfileDesk };