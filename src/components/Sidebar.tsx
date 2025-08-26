import { FiHome, FiBarChart2, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import { SiTailwindcss } from "react-icons/si";


const Sidebar = () => {
  return (
    <aside className="h-screen w-75 bg-gray-900 text-gray-200 flex flex-col fixed inset-y-0 left-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center justify-center p-6 border-b border-gray-700">
        <SiTailwindcss className="text-3xl text-cyan-400" />
        <h1 className="text-xl font-bold ml-2">My App</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a 
          href="#" 
          className="flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded-lg"
          aria-current="page"
        >
          <FiHome className="mr-3" />
          Dashboard
        </a>
        <a 
          href="#" 
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors duration-200"
        >
          <FiBarChart2 className="mr-3" />
          Analytics
        </a>
        <a 
          href="#" 
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors duration-200"
        >
          <FiUsers className="mr-3" />
          Users
        </a>
        <a 
          href="#" 
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors duration-200"
        >
          <FiSettings className="mr-3" />
          Settings
        </a>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <img 
            className="h-10 w-10 rounded-full object-cover" 
            src="https://placehold.co/100x100" // Replace with actual user image
            alt="User avatar" 
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">Jane Doe</p>
            <a href="#" className="flex items-center text-xs text-gray-400 hover:text-cyan-400">
              <FiLogOut className="mr-1" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;