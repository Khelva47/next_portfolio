const HeroSection = ({ heroData }) => {
  return (
    <div 
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{heroData.name}</h1>
        <p className="text-xl">{heroData.tagline}</p>
      </div>
    </div>
  );
};

export default HeroSection;