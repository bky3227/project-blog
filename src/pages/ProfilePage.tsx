import { useState } from "react";
import ProfileMobile from "./ProfileMobile";
import ProfileDesktop from "./ProfileDesktop";
import Navbar from "../components/NavBar";


export type Tab = "profile" | "password";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    <>
    <Navbar />
      {/* Mobile */}
      <div className="md:hidden">
        <ProfileMobile activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <ProfileDesktop activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default ProfilePage;