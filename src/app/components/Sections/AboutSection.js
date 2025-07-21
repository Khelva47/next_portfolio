const AboutSection = ({ aboutData, statsData, skillsData }) => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <div className="w-12 h-1 bg-blue-500 mb-6"></div>
        <p className="text-gray-600 leading-relaxed">
          {aboutData.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={aboutData.image}
            alt={aboutData.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">{aboutData.title}</h3>
          <p className="text-gray-600 mb-6">
            {aboutData.subtitle}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            {aboutData.details.map((detail, index) => (
              <div key={index}>
                <strong>{detail.label}:</strong> {detail.value}
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 mt-6">
            {aboutData.additionalInfo}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {statsData.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="w-12 h-1 bg-blue-500 mb-6"></div>
        <p className="text-gray-600 mb-8">
          {skillsData.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}