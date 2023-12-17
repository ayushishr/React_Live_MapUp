import React from 'react';
import { Layout, Button } from 'antd';
import Map from "../Images/map_logo.png"

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height:'50px' }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Map} alt="Logo" style={{ height: '50px', width: 'auto', marginRight: '16px' }}/>
        <h3 style={{ margin: 0 }}> MapUp Application</h3>
      </div>
      <nav>
        <Button type="primary" style={{ marginRight: '8px' }}>Login</Button>
        <Button style={{ marginRight: '8px' }}>Logout</Button>
        <Button>Profile</Button>
      </nav>
    </AntHeader>
  );
};

export default Header;