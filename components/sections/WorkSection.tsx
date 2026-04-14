const projects = [
  {
    title: 'LINK Mobile App',
    category: 'Mobile Application - Rakuten Inc',
    description: 'Contributing to architecture design, feature development, and performance optimization of the LINK mobile platform, supporting Rakuten mobile onboarding, digital loyalty services, wallet capabilities, and user engagement features across the Rakuten ecosystem.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'CI/CD'],
    image: '/link-icon.png',
    link: 'https://apps.apple.com/jp/app/rakuten-link/id1498877539?l=en-US'
  },
  {
    title: 'Rakuten Ichiba',
    category: 'Mobile Application - Rakuten Inc',
    description: 'Contributing to Japan\'s largest e-commerce marketplace app, enabling seamless shopping experience with Rakuten Points integration, personalized recommendations, and secure payment options.',
    technologies: ['Swift', 'UIKit', 'MVVM', 'CI/CD', 'Analytics'],
    image: '/rakuten-ichiba-icon.png',
    link: 'https://apps.apple.com/jp/app/%E6%A5%BD%E5%A4%A9%E5%B8%82%E5%A0%B4-%E3%81%8A%E8%B2%B7%E3%81%84%E7%89%A9%E3%81%A7%E6%A5%BD%E5%A4%A9%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%8C%E8%B2%AF%E3%81%BE%E3%82%8B%E4%BE%BF%E5%88%A9%E3%81%AA%E9%80%9A%E8%B2%A9%E3%82%A2%E3%83%97%E3%83%AA/id419267350?l=en-US'
  },
  {
    title: 'Rakuten Cash App',
    category: 'Mobile Application - Rakuten Inc',
    description: 'Led development of new Cash Transfer app with improved performance. Implemented SPS, Missions, Discovery, Wallet and Home tab modules. Refactored for modular architecture and SOLID principles.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'Firebase'],
    image: '/rakuten-cash-icon.jpg',
    link: 'https://apps.apple.com/jp/app/%E6%A5%BD%E5%A4%A9%E3%82%AB%E3%83%BC%E3%83%89-%E6%98%8E%E7%B4%B0%E7%A2%BA%E8%AA%8D-%E5%AE%B6%E8%A8%88%E7%B0%BF%E3%83%97%E3%83%AA/id570105907'
  },
  {
    title: 'Rakuten Card App and SDK',
    category: 'Mobile Application - Rakuten India',
    description: 'Led development of Rakuten\'s digital loyalty card mobile application and SDK framework, enabling integration of SuperPoints virtual card services within partner mobile applications. Award-winning app with 4.6 rating - best development project and best rated app awards.',
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase', 'SDK Development'],
    image: '/rakuten-card-icon.webp',
    link: 'https://apps.apple.com/jp/app/%E6%A5%BD%E5%A4%A9%E3%83%9A%E3%82%A4-%E6%A5%BD%E5%A4%A9%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%82%AB%E3%83%BC%E3%83%89%E3%82%82%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%B9%E3%83%9E%E3%83%9B%E6%B1%BA%E6%B8%88%E3%82%A2%E3%83%97%E3%83%AA/id1139755229?l=en-US'
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
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 block"
          >
            {/* Project Icon/Image */}
            <div className="mb-4">
              {project.image.startsWith('/') ? (
                <img src={project.image} alt={project.title} className="w-16 h-16 rounded-xl object-cover" />
              ) : (
                <span className="text-6xl">{project.image}</span>
              )}
            </div>

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
          </a>
        ))}
      </div>
    </section>
  )
}
