const SkillBar = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ 
            width: `${skill.percentage}%`,
            animationDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );
};