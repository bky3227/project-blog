import { User, Upload } from "lucide-react";

function ProfileForm() {
  return (
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
  );
}

export default ProfileForm;