const StatsCard = ({ stat }) => {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
      <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
      <div className="text-xs text-gray-500">{stat.sublabel}</div>
    </div>
  );
};

export default StatsCard;