import { Menu } from 'lucide-react';

const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen, title = "iPortfolio" }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40 px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
export default MobileHeader;