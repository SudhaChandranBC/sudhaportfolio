const projects = [
  {
    title: 'LINK Mobile App',
    category: 'Mobile Application - Rakuten Inc',
    description: 'Contributing to architecture design, feature development, and performance optimization of the LINK mobile platform, supporting Rakuten mobile onboarding, digital loyalty services, wallet capabilities, and user engagement features across the Rakuten ecosystem.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'CI/CD'],
    image: '🔗',
    link: '#'
  },
  {
    title: 'Rakuten Cash App',
    category: 'Mobile Application - Rakuten Inc',
    description: 'Led development of new Cash Transfer app with improved performance. Implemented SPS, Missions, Discovery, Wallet and Home tab modules. Refactored for modular architecture and SOLID principles.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'Firebase'],
    image: '🏦',
    link: '#'
  },
  {
    title: 'RPointCard App & SDK',
    category: 'Mobile Application - Rakuten India',
    description: 'Led development of Rakuten\'s digital loyalty card mobile application and SDK framework, enabling integration of SuperPoints virtual card services within partner mobile applications. Award-winning app with 4.6 rating - best development project and best rated app awards.',
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase', 'SDK Development'],
    image: '💳',
    link: '#'
  },
  {
    title: 'Rakuten Ticket (EventGate)',
    category: 'Mobile Application - Rakuten India',
    description: 'Designed and developed as sole iOS developer, delivering complete SDLC from requirement gathering and architecture to App Store release within two months. Implemented electronic ticketing features including purchasing, sharing, transfer, and resale functionality.',
    technologies: ['Swift', 'Core Data', 'UIKit', 'REST APIs'],
    image: '🎫',
    link: '#'
  },
  {
    title: 'Aquafadas Mobile Platform',
    category: 'Mobile Application - Rakuten India',
    description: 'Developed configurable iOS software application modules supporting dynamic content rendering and real-time customization, integrated Firebase analytics frameworks, and implemented subscription management workflows.',
    technologies: ['Swift', 'Objective-C', 'Firebase', 'Analytics'],
    image: '⚡',
    link: '#'
  },
  {
    title: 'SFIpad – Sales Force Automation',
    category: 'Enterprise Solution - Xsysys',
    description: 'Led design and development of mobile enterprise iPad application supporting customer management, visit tracking, order entry, and reporting modules with offline synchronization capabilities using Sybase UltraLite and MobiLink.',
    technologies: ['Objective-C', 'UIKit', 'Sybase UltraLite', 'MobiLink', 'SQL Server'],
    image: '📊',
    link: '#'
  },
  {
    title: 'iCatch – Safety Incident Reporting',
    category: 'Enterprise Solution - Xsysys',
    description: 'Designed and developed iOS application used within Shell organization for incident reporting and employee safety compliance assessments. Progressed from Team Member to Project Lead role.',
    technologies: ['Objective-C', 'Core Data', 'UIKit', 'Enterprise'],
    image: '⛽',
    link: '#'
  },
  {
    title: 'Sales Force+ Desktop App',
    category: 'Enterprise Solution - Xsysys',
    description: 'Contributed to development of PowerBuilder-based enterprise software application supporting customer management, order processing, and reporting functionality.',
    technologies: ['PowerBuilder', 'SQL Server', 'Enterprise'],
    image: '💻',
    link: '#'
  }
]

export default function WorkSection() {
  return (
    <section id="work" className="mb-24">
      <div className="mb-16">
        <p className="text-sm font-mono text-emerald-400 mb-2">// Featured Projects</p>
        <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
        <p className="text-neutral-400 text-lg max-w-2xl">
          A collection of projects I've built throughout my career as an iOS Developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Project Icon/Image */}
            <div className="text-6xl mb-4">{project.image}</div>

            {/* Category */}
            <p className="text-xs font-mono text-emerald-400 mb-2">{project.category}</p>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link Arrow */}
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <span>View Project</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
