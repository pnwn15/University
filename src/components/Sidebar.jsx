import { useState } from 'react';
import { Menu, Layout, Button } from 'antd';
import { DashboardOutlined, QuestionCircleOutlined, HomeOutlined, AppstoreOutlined, CreditCardOutlined, ExportOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { key: 'sub1', label: 'หน้าหลัก', icon: <HomeOutlined />, href: '/' },
    { key: 'sub2', label: 'ข้อมูลหอพัก', icon: <QuestionCircleOutlined />, href: '/dorm-info' },
    { key: 'sub3', label: 'ติดต่อสอบถาม', icon: <DashboardOutlined />, href: '/contact' },
  ];

  const items1 = [
    { key: 'sub4', label: 'จองหอพัก', icon: <ExportOutlined />, href: '/book-dorm' },
    { key: 'sub5', label: 'พิมพ์ใบชำระเงิน/ใบเสร็จรับเงิน', icon: <CreditCardOutlined />, href: '/payment-receipt' },
    { key: 'sub6', label: 'เข้าสู่ระบบ', icon: <UserOutlined />, href: '/Login' },
  ];


  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleSidebar}
      style={{
        width: '256px',
        height: 'auto',
        backgroundColor: '#E2F0FC', // ใช้สีพื้นหลังจาก Hex
        color: '#E2F0FC',
        position: 'relative',
        boxShadow: '10px'
      }}
>
  {/* Button to toggle collapse */}
  <Button
    type="primary"
    onClick={toggleSidebar}
    style={{
      position: 'absolute',
      top: '15px',
      left: '22px',
      zIndex: 10,
      color: 'white',
      fontSize: '18px',
      padding: '6px',
    }}
  >
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  </Button>

  <Menu
        style={{
          width: '100%',
          height: '100%',
          marginTop: '40px',
          backgroundColor: '#E2F0FC', // ใช้สีพื้นหลังตรงๆ
        }}

    defaultSelectedKeys={['sub1']}
    mode="inline"
    theme="dark"
  >
    {/* Main Heading for the menu */}
    <Menu.Item
      key="main-heading"
      disabled
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#F2F9FE',
        paddingLeft: '16px',
      }}
    >
      <AppstoreOutlined style={{ color: '#0A7AD4', fontSize: '18px' }} />
          {!collapsed && <span style={{ color: '#0A7AD4' }}> ข้อมูลหอพัก</span>}
    </Menu.Item>

    {/* Submenu items */}
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon} style={{ color: '#000000', fontSize: '16px' }}>
            <a href={item.href} style={{ color: '#000000', textDecoration: 'none' }}>
              {item.label}
            </a>
          </Menu.Item>
        ))}


    {/* Main Heading for another section */}
    <Menu.Item
      key="main-heading2"
      disabled
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#000000',
        paddingLeft: '16px',
      }}
    >
      <AppstoreOutlined style={{ color: '#0A7AD4', fontSize: '18px' }} />
          {!collapsed && <span style={{ color: '#0A7AD4' }}> นิสิตใหม่</span>}
    </Menu.Item>

    {/* Submenu items for new section */}
        {items1.map(item => (
          <Menu.Item key={item.key} icon={item.icon} style={{ color: '#000000', fontSize: '16px' }}>
            <a href={item.href} style={{ color: '#000000', textDecoration: 'none' }}>
              {item.label}
            </a>
          </Menu.Item>
        ))}

  </Menu>
</Sider>

  );
};

export default Sidebar;
