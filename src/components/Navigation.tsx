import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-martial-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">MashaLads</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/courses" className="hover:text-martial-red px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </Link>
              <Link to="/pricing" className="hover:text-martial-red px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link to="/login" className="hover:text-martial-red px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-martial-red focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/courses"
              className="hover:text-martial-red block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="/pricing"
              className="hover:text-martial-red block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="hover:text-martial-red block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;