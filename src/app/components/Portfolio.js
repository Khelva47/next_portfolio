"use client"
import { Home, User, FileText, Briefcase, Settings, Mail, Facebook, Github, Linkedin, Star } from "lucide-react"
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
    image: "/images/Myphoto.jpg",
    socialLinks: [
      { icon: Github, url: "https://github.com/Khelva47" },
      { icon: Facebook, url: "https://www.facebook.com/share/1A26dt4iay/" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/kelvin-mponda-902b902b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
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
      "I'm a developer and educator who loves turning ideas into apps. From coding with Nextjs and Flutter to teaching and learning, I'm all about impact and growth.",
    title: "Full-Stack Developer & Educator",
    subtitle: "Building meaningful digital experiences through code, creativity, and a passion for education.",
    image: "/images/Myphoto.jpg",
    details: [
      { label: "Birthday", value: "15 August 2000" },
      { label: "Phone", value: "+265 994 679 974" },
      { label: "City", value: "Zomba, Malawi" },
      { label: "Email", value: "kelvinmponda47@gmail.com" },
      { label: "Freelance", value: "Available" },
    ],
    additionalInfo: "",
  }

  const statsData = [
    {
      number: 20,
      label: "Happy Clients",
      sublabel: "Web & mobile solutions delivered",
      icon: "user-check",
    },
    {
      number: 10,
      label: "Projects",
      sublabel: "Across startups & NGOs",
      icon: "folder-open",
    },
    {
      number: 1000,
      label: "Hours of Experience",
      sublabel: "Coding, consulting & mentoring",
      icon: "headphones",
    },
    {
      number: 6,
      label: "Collaborators",
      sublabel: "Developers, designers & mentors",
      icon: "users",
    },
  ]

  const skillsData = [
    { name: "PYTHON", percentage: 100 },
    { name: "WORDPRESS", percentage: 95 },
    { name: "JAVASCRIPT", percentage: 95 },
    { name: "FLUTTER", percentage: 90 },
    { name: "JAVA", percentage: 85 },
    { name: "TYPESCRIPT", percentage: 80 },
  ]

  const testimonialsData = [
    // {
    //   id: 1,
    //   name: "Miss Blessing Douglas",
    //   role: "Ceo & Founder",
    //   company: "BOMA Group",
    //   image: "",
    //   text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    //   rating: 5,
    // },
    {
      id: 2,
      name: "Micheal Chikaonda",
      role: "Full Stack Developer & Network Engineer",
      company: "iTech360Systems",
      image: "",
      text: "Working side by side with Kelvin Mponda, I’ve come to rely on his deep technical skills and unwavering commitment. He’s an invaluable teammate in our computer systems work.",
      rating: 5,
    },

  ]

  const resumeData = {
    education: [
      {
        degree: "BACHELOR OF EDUCATION, COMPUTER SCIENCE",
        period: "2021 - Present",
        institution: "University of Malawi, Chancellor College",
        description:
          "Currently pursuing a degree in Computer Science Education with a strong focus on software development, programming, and teaching methodologies. This program has equipped me with both technical and pedagogical skills, enabling me to build real-world applications and contribute meaningfully as an educator and developer.",
      },
    ],
    experience: [
      {
        title: "WEBSITE DEVELOPER (PART-TIME)",
        period: "2025 - Present",
        company: "BOMA Group, USA",
        responsibilities: [
          "Develop and maintain websites for the Boma Prize for Africa and Boma Consult.",
          "Enhance user experience through responsive design and performance optimization.",
        ],
      },
      {
        title: "SOFTWARE ENGINEER",
        period: "2025 - Present",
        company: "iTech360Systems, Zomba",
        responsibilities: [
          "Database designing, maintainance and optimazition",
          "Developing UIs and implement frontend features using modern frameworks.",
          "Collaborating with collegues to deliver scalable software solutions.",
        ],
      },
      {
        title: "FULL-STACK DEVELOPER (INTERN)",
        period: "2023 - 2025",
        company: "Gusher Labs, Blantyre",
        responsibilities: [
          "Designed and managed databases and RESTful APIs.",
          "Develop user interfaces and implement frontend features using modern frameworks.",
          "Collaborate with cross-functional teams to deliver scalable software solutions.",
        ],
      },
      {
        title: "TEACHER (VOLUNTEER)",
        period: "2023",
        company: "Malindi Secondary School, Zomba",
        responsibilities: [
          "Prepared and delivered Computer Studies lessons to secondary school students.",
          "Developed schemes of work and assessed student performance and behavior.",
          "Reported academic progress and classroom activities to the school principal.",
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