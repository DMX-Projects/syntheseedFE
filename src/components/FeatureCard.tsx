import { LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="relative flex items-center justify-center w-[170px] h-[170px] sm:w-[180px] sm:h-[180px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`transform rotate-45 flex flex-col items-center justify-center shadow-lg border transition-colors duration-300
          ${isDark ? 'bg-[#10131d] border-cyan-500' : 'bg-white border-cyan-400'}
        `}
        style={{ width: 160, height: 160 }}
      >
        <div className="flex flex-col items-center justify-center -rotate-45 w-full px-2 py-1 min-h-[120px] overflow-hidden">
          <div
            className={`flex items-center justify-center rounded-full shadow-sm mb-1
              ${isDark
                ? 'bg-gradient-to-br from-cyan-700 to-cyan-400'
                : 'bg-gradient-to-br from-cyan-400 to-cyan-600'}
            `}
            style={{ width: 26, height: 26 }}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className={`text-[0.75rem] font-semibold mb-1 text-center break-words
            ${isDark ? 'text-cyan-200' : 'text-cyan-700'}
          `}>
            {title}
          </h3>
          <p className={`text-[0.7rem] text-center leading-tight break-words overflow-hidden
            ${isDark ? 'text-gray-200' : 'text-gray-700'}
          `}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
