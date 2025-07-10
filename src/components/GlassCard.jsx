const GlassCard = ({ children, className = '', gradient = 'from-blue-400/20 to-purple-400/20' }) => {
  return (
    <div className={`
      relative backdrop-blur-lg bg-gradient-to-br ${gradient}
      border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6
      shadow-xl hover:shadow-2xl transition-all duration-300
      hover:scale-105 hover:border-white/30
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl sm:rounded-2xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;