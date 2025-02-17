import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

const Navbar = () => {
    const head1 = { img: 'https://dorm.tsu.ac.th/assets/global/img/TSULOGOwhite.png', head: 'ระบบบริหารจัดการหอพักนิสิต มหาวิทยาลัยทักษิณ', headsm: 'Dormitory Management System Thaksin University' }
    return (
        <Header style={{
            height: '130px',           
            background: '#0078D7',    
            padding: '0 20px',        
            position: 'relative',     
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)'
        }}>
            <div className="flex items-center text-white">
                <img className="w-18 mr-3" src={head1.img} alt="" />
                <div className="flex flex-col hidden sm:hidden md:block lg:block xl:block">
                    <h1 className="text-lg font-semibold">
                        {head1.head} <br />
                        <span className="text-sm">{head1.headsm}</span>
                    </h1>
                </div>
            </div>
            <div className="absolute right-4 top-1/5 transform  flex items-center space-x-4">
                <UserOutlined style={{ fontSize: '24px', color: 'white' }} />
                <span className="text-white font-normal text-lg">สำหรับเจ้าหน้าที่</span>
            </div>
        </Header>
    );
};

export default Navbar;
