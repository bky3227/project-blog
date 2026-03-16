import { useState } from "react";

import SideBar from "../SideBar";

function CreateCategoryPage() {
    const [name, setName] = useState("");

    return (
        <div className="min-h-screen flex bg-[#FAF9F6]">
            {/* Sidebar */}
            <SideBar />
            <main className="flex-1 px-10 py-8">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Create category
                    </h1>

                    <button
                        className="flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm text-white hover:opacity-90"
                    >
                        Save
                    </button>
                </div>

                {/* Form */}
                <div className="max-w-xl">
                    <label className="mb-2 block text-sm text-gray-700">
                        Category name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Category name"
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>
            </main>
        </div>
    );
}

export default CreateCategoryPage;