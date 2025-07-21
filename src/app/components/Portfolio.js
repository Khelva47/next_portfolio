import { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  // Data configuration
  const profileData = {
    name: "Kelvin Mponda",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { icon: Twitter, url: "https://twitter.com" },
      { icon: Facebook, url: "https://facebook.com" },
      { icon: Instagram, url: "https://instagram.com" },
      { icon: MessageSquare, url: "https://t.me" },
      { icon: Linkedin, url: "https://linkedin.com" },
    ]
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const heroData = {
    name: "Kelvin Mponda",
    tagline: "I'm A Full-Stack Developer",
    backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
  };

  const aboutData = {
    name: "Kelvin Mponda",
    title: "Full-Stack Developer & Educator",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    details: [
      { label: "Birthday", value: "15 August 2000" },
      { label: "Age", value: "25" },
      { label: "Website", value: "www.example.com" },
      { label: "Phone", value: "+265 994 679 974" },
      { label: "Email", value: "kelvinmponda47@gmail.com" },
      { label: "City", value: "Zomba, Malawi" },
      { label: "Freelance", value: "Available" },
    ],
    additionalInfo: "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia."
  };

  const statsData = [
    { number: '232', label: 'Happy Clients', sublabel: 'consequuntur quae', icon: '😊' },
    { number: '521', label: 'Projects', sublabel: 'adipisci atque cum quia aut', icon: '📋' },
    { number: '1453', label: 'Hours Of Support', sublabel: 'aut commodi quaerat', icon: '🎧' },
    { number: '32', label: 'Hard Workers', sublabel: 'rerum asperiores dolor', icon: '👥' },
  ];

  const skillsData = {
    description: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    skills: [
      { name: 'HTML', percentage: 100 },
      { name: 'CSS', percentage: 90 },
      { name: 'JAVASCRIPT', percentage: 75 },
      { name: 'PHP', percentage: 80 },
      { name: 'WORDPRESS/CMS', percentage: 90 },
      { name: 'PHOTOSHOP', percentage: 55 },
    ]
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection heroData={heroData} />;
      case 'about':
        return (
          <AboutSection 
            aboutData={aboutData} 
            statsData={statsData} 
            skillsData={skillsData} 
          />
        );
      default:
        return (
          <AboutSection 
            aboutData={aboutData} 
            statsData={statsData} 
            skillsData={skillsData} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          profileData={profileData}
          navigationItems={navigationItems}
        />
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-72 h-full bg-gray-900">
            <Sidebar 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              profileData={profileData}
              navigationItems={navigationItems}
            />
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="lg:ml-72 pt-16 lg:pt-0">
        {renderContent()}
      </div>
      
      {/* Skills Modal */}
      <SkillsModal 
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
        skillsData={skillsData}
      />
      
      {/* Floating Action Button for Skills (Mobile) */}
      <button
        onClick={() => setIsSkillsModalOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-40 hover:bg-blue-700 transition-colors"
      >
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Portfolio;