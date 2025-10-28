import React, { useState } from "react";
import { Drawer } from "antd";

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
                className={`
          rounded-md text-white transition
          px-3 py-1 text-sm                /* default = mobile */
          sm:px-4 sm:py-2 sm:text-base     /* desktop override */
          ${activeView === t.key ? "bg-white/20 shadow-inner" : "bg-transparent hover:bg-white/10"}
        `}
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
            <Drawer
                placement="right"
                open={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                closable={false}
                width="60%"
                className="bg-gray-900!"
                closeIcon={<span style={{ color: "white", fontSize: 20 }}>✕</span>}
            >
                <div className="flex justify-end mb-4">
                    <button onClick={() => setDrawerVisible(false)} className="text-white text-xl">
                        ✕
                    </button>
                </div>
                {TabList(true, activeView, handleViewChange)}
            </Drawer>
        </>
    );
};

export default Navbar;
