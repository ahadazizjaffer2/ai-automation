import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="p-2 md:p-4 pl-[40px] md:pl-[60px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
