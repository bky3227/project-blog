import { useRef, useState } from "react";
import SideBar from "../SideBar";

function ProfilePage() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [profile, setProfile] = useState({
    name: "Thompson P.",
    username: "thompson",
    email: "thompson.p@gmail.com",
    bio:
      "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.\n\nWhen I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.",
    avatar: "/src/assets/herosection.jpg", // เปลี่ยนเป็น path รูปจริงของคุณ
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setProfile({ ...profile, avatar: preview });
  };

  return (
    <div className="min-h-screen flex bg-[#FAF9F6]">
      {/* Sidebar */}
      <SideBar />
      <main className="flex-1 bg-[#FAF9F6] px-10 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Profile</h1>

          <button className="rounded-full bg-black px-6 py-2 text-sm text-white hover:opacity-90">
            Save
          </button>
        </div>

        <div className="max-w-2xl space-y-8">
          {/* Avatar */}
          <div className="flex items-center gap-6">
            <img
              src={profile.avatar}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border"
            />

            <div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm hover:bg-gray-50"
              >
                Upload profile picture
              </button>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleUpload}
              />
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-700">Name</label>
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Username */}
          <div>
            <label className="mb-2 block text-sm text-gray-700">Username</label>
            <input
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm text-gray-700">
              Bio <span className="text-gray-400">(max 120 letters)</span>
            </label>
            <textarea
              value={profile.bio}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;