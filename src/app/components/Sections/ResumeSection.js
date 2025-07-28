"use client"

const ResumeSection = ({ resumeData }) => {
  return (
    <section id="resume" className="py-20 px-8 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I'm a dedicated Full-Stack Developer and Educator with a passion for building scalable applications and
            sharing knowledge. With experience in both the classroom and the tech industry, I've contributed to
            real-world projects across web and mobile platforms. My journey blends hands-on coding with a strong
            foundation in education, aiming to create impactful digital solutions for diverse communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Education */}
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8 mb-12">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">{edu.degree}</h4>
                  <p className="text-sm bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded mb-3">
                    {edu.period}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-3 italic">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Professional Experience - First Part */}
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {resumeData.experience.slice(0, 2).map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">{exp.title}</h4>
                  <p className="text-sm bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded mb-3">
                    {exp.period}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-4 italic">{exp.company}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Professional Experience - Continuation */}
            <h3 className="text-2xl font-bold mb-6 lg:invisible">Professional Experience</h3>
            <div className="space-y-8">
              {resumeData.experience.slice(2).map((exp, index) => (
                <div key={index + 2} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">{exp.title}</h4>
                  <p className="text-sm bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded mb-3">
                    {exp.period}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-4 italic">{exp.company}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
