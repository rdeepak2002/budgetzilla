import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiChartPie,
  HiViewGrid,
  HiCreditCard,
  HiCollection,
  HiTrendingUp,
  HiLogout
} from 'react-icons/hi';
import { FaPiggyBank } from "react-icons/fa";

// Data for navigation links
const navLinks = [
  { name: 'Dashboard', icon: HiViewGrid, path: '/home' },
  { name: 'Transactions', icon: HiCollection, path: '/transactions' },
  { name: 'Accounts', icon: HiCreditCard, path: '/accounts' },
  { name: 'Budgets', icon: HiChartPie, path: '/budgets' },
  { name: 'Investments', icon: HiTrendingUp, path: '/investments' },
];

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 left-0">
      {/* Header with Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center">
        <div className="bg-emerald-600 text-white w-8 h-8 rounded-md flex items-center justify-center mr-3 font-bold">
          <FaPiggyBank size={20} />
        </div>
        <span className="font-bold text-2xl text-gray-800">Budgetzilla</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-4 pl-3">Menu</p>
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/home'}
                className={({ isActive }) =>
                  // This outer className styles the link container (the <a> tag)
                  'flex items-center px-3 py-2 text-base font-medium rounded-md group ' +
                  (isActive
                    ? 'bg-emerald-200 text-emerald-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900')
                }
              >
                {({ isActive }) => (
                  // By using a function as a child, we get `isActive` to style the contents
                  <>
                    <link.icon
                      // This is now a valid string, which fixes the bug
                      className={`w-7 h-7 mr-3 ${
                        isActive
                          ? 'text-emerald-700'
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    />
                    {link.name}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://placehold.co/100x100" // Replace with actual user image
            alt="User avatar"
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-800">Jane Doe</p>
            <p className="text-xs text-gray-500">jane.doe@example.com</p>
          </div>
          <button className="text-gray-500 hover:text-emerald-600 focus:outline-none">
            <HiLogout className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;