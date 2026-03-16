import { ImagePlus } from "lucide-react";
import SideBar from "../SideBar";

function CreateArticlePage() {
  return (
    <div className="min-h-screen flex bg-[#F7F6F3]">
      {/* Sidebar (ซ้าย) */}
      <SideBar />

      {/* Content (ขวา) */}
      <div className="flex-1 p-10">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold">Create article</h1>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-full border text-sm">
                Save as draft
              </button>
              <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
                Save and publish
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              {/* Thumbnail */}
              <div>
                <label className="block text-sm mb-2">Thumbnail image</label>

                <div className="w-full h-40 bg-[#EFEDE8] rounded-xl flex items-center justify-center border border-dashed">
                  <ImagePlus className="text-gray-400" />
                </div>

                <button className="mt-3 px-4 py-2 rounded-full border text-sm">
                  Upload thumbnail image
                </button>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm mb-2">Category</label>
                <select className="w-full px-4 py-2 rounded-lg border text-sm">
                  <option>Cat</option>
                  <option>General</option>
                  <option>Inspiration</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm mb-2">Author name</label>
                <input
                  type="text"
                  value="Thompson P."
                  disabled
                  className="w-full px-4 py-2 rounded-lg border text-sm bg-gray-100 text-gray-500"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-2 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Article title"
                  className="w-full px-4 py-2 rounded-lg border text-sm"
                />
              </div>

              {/* Introduction */}
              <div>
                <label className="block text-sm mb-2">
                  Introduction{" "}
                  <span className="text-gray-400">(max 120 letters)</span>
                </label>
                <textarea
                  placeholder="Introduction"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border text-sm resize-none"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm mb-2">Content</label>
                <textarea
                  placeholder="Content"
                  rows={10}
                  className="w-full px-4 py-2 rounded-lg border text-sm resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateArticlePage;