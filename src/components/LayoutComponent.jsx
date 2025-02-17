import  { useState } from 'react';
import Navbar from './์Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Main = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false); // state สำหรับการเปิด/ปิด Sidebar

    const toggleSidebar = () => {
        setCollapsed(!collapsed); // ฟังก์ชันสลับการเปิด/ปิด Sidebar
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navbar */}
            <Navbar onToggleSidebar={toggleSidebar} />

            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar  collapsed={collapsed} onCollapse={toggleSidebar} />

                {/* Content Layout */}
                <div
                    className={`flex-1 p-6 bg-white rounded-lg transition-all duration-300`}
                >
                    {children} {/* คลุม children ทุกๆ หน้า */}
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Main;
