import { useState } from "react";
import { Search, Pencil, Trash2, Plus } from "lucide-react";
import SideBar from "../SideBar";

const mockCategories = ["Cat", "General", "Inspiration"];

function CategoryManagement() {
  const [search, setSearch] = useState("");

  const filteredCategories = mockCategories.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-[#FAF9F6]">
      {/* Sidebar */}
      <SideBar />

      {/* Right content */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            Category management
          </h1>

          <button className="flex items-center gap-2 rounded-full bg-[#1F1F1F] px-5 py-2 text-sm text-white hover:opacity-90">
            <Plus size={16} />
            Create category
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4 w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="border-b px-4 py-3 text-sm font-medium text-gray-700">
            Category
          </div>

          {filteredCategories.map((category, index) => (
            <div
              key={category}
              className={`flex items-center justify-between px-4 py-3 text-sm ${
                index % 2 === 1 ? "bg-[#F3F2EE]" : "bg-white"
              }`}
            >
              <span className="text-gray-900">{category}</span>

              <div className="flex items-center gap-4">
                <button className="text-gray-500 hover:text-gray-900">
                  <Pencil size={16} />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              No category found
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CategoryManagement;