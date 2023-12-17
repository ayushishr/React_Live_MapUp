import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '24px 0' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '12px', lineHeight: '1.6' }}>
        <h3>OpenStreetMap (OSM) Map Application</h3>
        <p>
          Thank you for choosing the OSM Map Application. We hope it enhances your navigation and exploration experience. Happy mapping!
        </p>
        <p>&copy; {new Date().getFullYear()} OpenStreetMap (OSM) Map Application. All rights reserved.</p>
      </div>
    </AntFooter>
  );
};

export default Footer;