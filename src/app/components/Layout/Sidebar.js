import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  Settings, 
  ChevronDown, 
  Mail,
  Twitter,
  Facebook,
  Instagram,
  MessageSquare,
  Linkedin
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, profileData, navigationItems }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-gray-900 text-white p-6 z-50 overflow-y-auto">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <img
          src={profileData.image}
          alt={profileData.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
        <div className="flex justify-center space-x-3 mt-4">
          {profileData.socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
        
        {/* Dropdown Example */}
        <div className="relative">
          <button className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg">
            <span>Dropdown</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </div>
  );
};