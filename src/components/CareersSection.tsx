import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CareersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Build cutting-edge AI solutions that power the future of innovation management.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Create beautiful, intuitive experiences that help users transform their ideas into reality.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop scalable web applications with modern technologies and best practices.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Drive growth and brand awareness through strategic marketing initiatives.'
    },
    {
      title: 'Customer Success Lead',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our customers achieve their goals and maximize value from our platform.'
    },
    {
      title: 'ML Research Scientist',
      department: 'Research',
      location: 'Remote / Seattle',
      type: 'Full-time',
      description: 'Push the boundaries of machine learning and AI to solve complex problems.'
    }
  ];

  return (
    <section id="careers" className="py-12 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-cyan-500 mb-1">CAREERS</p>
            <h2 className="text-3xl md:text-3xl font-bold text-primary mb-4">
               <span className="text-gradient">Come build the future of innovation</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Be part of something extraordinary. Help us shape the future of innovation and AI-powered productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer transform-3d"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-600 text-sm rounded-full mb-3">
                      {job.department}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300 animate-pulse-glow">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <p className="text-secondary mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-secondary mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{job.type}</span>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors duration-300">
                  <span>View Role</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

         <div className="mt-12 text-center">
  <p className="text-secondary text-lg">
    Don't see a perfect fit? Send your resume to{' '}
    <a href="mailto:careers@syntheseed.com" className="text-cyan-600 hover:underline">
      careers@syntheseed.com
    </a>
    .
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default CareersSection;
