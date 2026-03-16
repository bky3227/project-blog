import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import SideBar from "../SideBar";

function ResetPasswordPage() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const renderEyeIcon = (
        isShown: boolean,
        toggle: () => void
    ) => (
        <button
            type="button"
            onClick={toggle}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
            {isShown ? <Eye size={16} /> : <EyeClosed size={16} />}
        </button>
    );

    return (
        <div className="min-h-screen flex bg-[#FAF9F6]">
            {/* Sidebar */}
            <SideBar />
            <main className="flex-1 bg-[#FAF9F6]">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-10 py-6">
                    <h1 className="text-lg font-semibold text-gray-900">
                        Reset password
                    </h1>

                    <button className="rounded-full bg-[#1F1F1F] px-6 py-2 text-sm text-white hover:opacity-90">
                        Reset password
                    </button>
                </div>

                {/* Content */}
                <div className="px-10 py-8">
                    <div className="max-w-md space-y-6">
                        {/* Current password */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-700">
                                Current password
                            </label>

                            <div className="relative">
                                <input
                                    type={showCurrent ? "text" : "password"}
                                    placeholder="Current password"
                                    className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                                {renderEyeIcon(showCurrent, () =>
                                    setShowCurrent(!showCurrent)
                                )}
                            </div>
                        </div>

                        {/* New password */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-700">
                                New password
                            </label>

                            <div className="relative">
                                <input
                                    type={showNew ? "text" : "password"}
                                    placeholder="New password"
                                    className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                                {renderEyeIcon(showNew, () =>
                                    setShowNew(!showNew)
                                )}
                            </div>
                        </div>

                        {/* Confirm new password */}
                        <div>
                            <label className="mb-2 block text-sm text-gray-700">
                                Confirm new password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                                {renderEyeIcon(showConfirm, () =>
                                    setShowConfirm(!showConfirm)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ResetPasswordPage;