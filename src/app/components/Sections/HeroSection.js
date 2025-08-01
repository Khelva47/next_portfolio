"use client"
import { useTypewriter } from "../../hooks/useTypewriter"

const HeroSection = ({ profileData }) => {
  const roles = ["a Full-Stack Developer", "a Designer", "an Educator", "a Data Scientist", "a Python Developer"]
  const typedText = useTypewriter(roles, 150, 100, 2000)

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url('../images/sl_031420_28950_10.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0  bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{profileData.name}</h1>
        <p className="text-xl md:text-2xl animate-fade-in-delay">
          {"I'm "}
          <span className="text-blue-400 font-semibold inline-block min-w-[200px] text-left">
            <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </span>
        </p>
      </div>
    </section>
  )
}

export default HeroSection