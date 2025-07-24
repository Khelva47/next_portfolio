"use client"
import {
  Home,
  User,
  FileText,
  Briefcase,
  Settings,
  Mail,
  Facebook,
  Github,
  Instagram,
  MessageSquare,
  Linkedin,
  Star,
} from "lucide-react"
import { useScrollSpy } from "../hooks/useScrollSpy"
import Sidebar from "./Layout/Sidebar"
import MobileHeader from "./Layout/MobileHeader"
import HeroSection from "./Sections/HeroSection"
import AboutSection from "./Sections/AboutSection"
import ResumeSection from "./Sections/ResumeSection"
import PortfolioSection from "./Sections/PortfolioSection"
import ServicesSection from "./Sections/ServicesSection"
import TestimonialsSection from "./Sections/TestimonialsSection"
import ContactSection from "./Sections/ContactSection"
import { useState } from "react"

const Portfolio = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const sectionIds = ["home", "about", "resume", "portfolio", "services", "testimonials", "contact"]
  const activeSection = useScrollSpy(sectionIds, 100)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = window.innerWidth >= 1024 ? 0 : 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const profileData = {
    name: "Kelvin Mponda",
    title: "Full-Stack Developer",
    image: "/images/profile.jpg",
    socialLinks: [
      { icon: Github, url: "https://githubcom" },
      { icon: Facebook, url: "https://facebook.com" },
      { icon: Linkedin, url: "https://linkedin.com" },
    ],
  }

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "services", label: "Services", icon: Settings },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const aboutData = {
    description:
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    title: "Full-Stack Developer & Educator",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/profile.jpg",
    details: [
      { label: "Birthday", value: "15 August 2000" },
      { label: "Website", value: "www.example.com" },
      { label: "Phone", value: "+265 994 679 974" },
      { label: "City", value: "Zomba, Malawi" },
      { label: "Age", value: "25" },
      { label: "Email", value: "kelvinmponda47@gmail.com" },
      { label: "Freelance", value: "Available" },
    ],
    additionalInfo:
      "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.",
  }

  const statsData = [
    { number: 232, label: "Happy Clients", sublabel: "consequuntur quae", icon: "😊" },
    { number: 521, label: "Projects", sublabel: "adipisci atque cum quia aut", icon: "📋" },
    { number: 1453, label: "Hours Of Support", sublabel: "aut commodi quaerat", icon: "🎧" },
    { number: 32, label: "Hard Workers", sublabel: "rerum asperiores dolor", icon: "👥" },
  ]

  const skillsData = [
    { name: "PYTHON", percentage: 100 },
    { name: "JAVASCRIPT", percentage: 90 },
    { name: "FLUTTER", percentage: 75 },
    { name: "TYPESCRIPT", percentage: 80 },
    { name: "WORDPRESS", percentage: 90 },
    { name: "PHOTOSHOP", percentage: 55 },
  ]

  const testimonialsData = [
    {
      id: 1,
      name: "Saul Goodman",
      role: "Ceo & Founder",
      company: "Lawson & Associates",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Designer",
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jena Karlis",
      role: "Store Owner",
      company: "Fashion Boutique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      rating: 5,
    },
    {
      id: 4,
      name: "Matt Brandon",
      role: "Freelancer",
      company: "Independent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      rating: 5,
    },
  ]

  const resumeData = {
    
    education: [
      {
        degree: "MASTER OF FINE ARTS & GRAPHIC DESIGN",
        period: "2015 - 2016",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description:
          "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
      },
      {
        degree: "BACHELOR OF FINE ARTS & GRAPHIC DESIGN",
        period: "2010 - 2014",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description:
          "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
      },
    ],
    experience: [
      {
        title: "SENIOR GRAPHIC DESIGN SPECIALIST",
        period: "2019 - Present",
        company: "Experion, New York, NY",
        responsibilities: [
          "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
          "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
          "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
          "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
        ],
      },
      {
        title: "GRAPHIC DESIGN SPECIALIST",
        period: "2017 - 2018",
        company: "Stepping Stone Advertising, New York, NY",
        responsibilities: [
          "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
          "Managed up to 5 projects or tasks at a given time while under pressure",
          "Recommended and consulted with clients on the most appropriate graphic design",
          "Created 4+ design presentations and proposals a month for clients and account managers",
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <Sidebar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        profileData={profileData}
        navigationItems={navigationItems}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="lg:ml-72 pt-16 lg:pt-0">
        <HeroSection profileData={profileData} />
        <AboutSection aboutData={aboutData} statsData={statsData} skillsData={skillsData} />
        <ResumeSection resumeData={resumeData} />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection testimonialsData={testimonialsData} />
        <ContactSection />
      </div>
    </div>
  )
}

export default Portfolio