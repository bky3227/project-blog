import { ChevronRight } from "lucide-react";
import SideBar from "../SideBar";

const notifications = [
  {
    id: 1,
    name: "Jacob Lash",
    action: "Commented on your article:",
    title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    comment:
      "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
    time: "4 hours ago",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    name: "Jacob Lash",
    action: "liked your article:",
    title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    time: "4 hours ago",
    avatar: "/avatar.png",
  },
];

function NotificationPage() {
  return (
    <div className="min-h-screen flex bg-[#FAF9F6]">
      {/* Sidebar */}
      <SideBar />
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <h1 className="mb-6 text-xl font-semibold text-gray-900">
          Notification
        </h1>

        {/* List */}
        <div className="w-full divide-y rounded-lg border border-gray-200 bg-white">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-6 px-6 py-5 hover:bg-[#F7F6F3]"
            >
              {/* Left */}
              <div className="flex gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="text-gray-900">
                    <span className="font-medium">{item.name}</span>{" "}
                    <span className="text-gray-600">{item.action}</span>{" "}
                    <span className="font-medium">
                      {item.title}
                    </span>
                  </p>

                  {item.comment && (
                    <p className="mt-1 text-gray-500 line-clamp-2">
                      “{item.comment}”
                    </p>
                  )}

                  <p className="mt-1 text-xs text-orange-500">
                    {item.time}
                  </p>
                </div>
              </div>

              {/* Right */}
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                View
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NotificationPage;