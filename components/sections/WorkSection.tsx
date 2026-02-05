const projects = [
  {
    title: 'Rakuten Cash App',
    category: 'Mobile Application',
    description: 'Led development of new Cash Transfer app with improved performance. Implemented SPS, Missions, Discovery, Wallet and Home tab modules.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest'],
    image: '🏦',
    link: '#'
  },
  {
    title: 'Point Card App',
    category: 'Mobile Application',
    description: 'Award-winning app with 4.6 rating. Best development project and best rated app awards. Built SDK and full application.',
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase'],
    image: '💳',
    link: '#'
  },
  {
    title: 'EventGate App',
    category: 'Mobile Application',
    description: 'Single-handedly delivered complete event management app within 3 months. Streamlined event ticketing and access control.',
    technologies: ['Swift', 'Core Data', 'UIKit'],
    image: '🎫',
    link: '#'
  },
  {
    title: 'SFIPad App',
    category: 'Enterprise Solution',
    description: 'Built enterprise iPad application from scratch for financial services. Delivered to multiple customers successfully.',
    technologies: ['Objective-C', 'Core Data', 'UIKit'],
    image: '📱',
    link: '#'
  },
  {
    title: 'iCatch iPhone App',
    category: 'Enterprise Solution',
    description: 'Led development of iPhone application for Shell India. Managed team of iOS engineers and provided technical training.',
    technologies: ['Objective-C', 'Core Location', 'MapKit'],
    image: '⛽',
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
