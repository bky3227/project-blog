import {
    Pencil,
    Trash2,
    Plus,
} from "lucide-react";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";

/* ---------- Types ---------- */
type Article = {
    title: string;
    category: string;
    status: "Published" | "Draft";
};


/* ---------- Component ---------- */
function AdminArticlePage() {
    const navigate = useNavigate();
    const articles: Article[] = [
        {
            title:
                "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
            category: "Cat",
            status: "Published",
        },
        {
            title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
            category: "Cat",
            status: "Published",
        },
        {
            title:
                "Finding Motivation: How to Stay Inspired Through Life’s Challenges",
            category: "General",
            status: "Published",
        },
        {
            title:
                "The Science of the Cat’s Purr: How It Benefits Cats and Humans Alike",
            category: "Cat",
            status: "Published",
        },
        {
            title: "Top 10 Health Tips to Keep Your Cat Happy and Healthy",
            category: "Cat",
            status: "Published",
        },
        {
            title: "Unlocking Creativity: Simple Habits to Spark Inspiration Daily",
            category: "Inspiration",
            status: "Published",
        },
    ];

    return (
        <div className="min-h-screen flex bg-[#F7F6F3]">
            <SideBar />
            {/* Main */}
            <main className="flex-1 p-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold">Article management</h1>
                    <button
                        onClick={() => navigate("/admin/create-article")}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm"
                    >
                        <Plus size={16} />
                        Create article
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-lg border text-sm w-64"
                    />
                    <select className="px-4 py-2 rounded-lg border text-sm">
                        <option>Status</option>
                    </select>
                    <select className="px-4 py-2 rounded-lg border text-sm">
                        <option>Category</option>
                    </select>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-[#F7F6F3] text-gray-600">
                            <tr>
                                <th className="text-left px-6 py-3">Article title</th>
                                <th className="text-left px-6 py-3">Category</th>
                                <th className="text-left px-6 py-3">Status</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-6 py-4 max-w-md truncate">
                                        {article.title}
                                    </td>
                                    <td className="px-6 py-4">{article.category}</td>
                                    <td className="px-6 py-4">
                                        <span className="flex items-center gap-2 text-green-600">
                                            ● {article.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex justify-end gap-3">
                                        <Pencil
                                            size={16}
                                            className="cursor-pointer text-gray-500 hover:text-black"
                                        />
                                        <Trash2
                                            size={16}
                                            className="cursor-pointer text-gray-500 hover:text-red-500"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminArticlePage;