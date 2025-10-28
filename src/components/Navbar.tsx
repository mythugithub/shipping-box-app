import React, { useState } from "react";

interface NavbarProps {
    activeView: "add" | "view";
    onViewChange: (view: "add" | "view") => void;
}

const tabs = [
    { key: "view", label: "View Box" },
    { key: "add", label: "Add Box" },
];

const TabList = (
  vertical: boolean,
  activeView: "add" | "view",
  handleViewChange: (view: "add" | "view") => void
) => (
  <div className={`flex ${vertical ? "flex-col" : "flex-row"} gap-3`}>
    {tabs.map((t) => (
      <button
        key={t.key}
        onClick={() => handleViewChange(t.key as "add" | "view")}
        className={`px-4 py-2 rounded-md text-white transition
          ${activeView === t.key ? "bg-white/20 shadow-inner" : "bg-transparent hover:bg-white/10"}`}
      >
        {t.label}
      </button>
    ))}
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ activeView, onViewChange }) => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const handleViewChange = (view: 'add' | 'view') => {
        onViewChange(view);
        setDrawerVisible(false)
    };



    return (
        <>
            <h1 className="text-white text-xl font-bold">Shipping Box</h1>

            {/* Desktop Tabs */}
            <div className="hidden sm:flex">{TabList(false, activeView, handleViewChange)}</div>


            {/* Mobile Menu Icon */}
            <button
                onClick={() => setDrawerVisible(true)}
                className="block sm:hidden text-white text-2xl"
            >
                ☰
            </button>

            {/* Drawer */}
            {drawerVisible && (
                <div className="fixed inset-0 z-9999 bg-black/50 flex justify-end">
                    <div className="w-2/3 max-w-xs bg-gray-900 h-full p-6 flex flex-col gap-6">
                        <button
                            onClick={() => setDrawerVisible(false)}
                            className="text-white text-xl self-end"
                        >
                            ✕
                        </button>
                        {TabList(true, activeView, handleViewChange)}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
