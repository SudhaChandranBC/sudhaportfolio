const experiences = [
  {
    title: 'Application Engineer',
    company: 'Rakuten Inc',
    location: 'Tokyo, Japan',
    period: 'Nov 2022 - Present',
    description: [
      'Researching, analysing, and evaluating <strong>iOS software application</strong> system requirements in collaboration with backend and product teams',
      'Designing and implementing scalable mobile architecture using <strong>Swift</strong>, <strong>SwiftUI</strong>, and <strong>MVVM</strong> patterns',
      'Developing core modules: <strong>Missions</strong>, <strong>SuperPoints</strong>, <strong>Wallet</strong>, <strong>Home Platform</strong>, and <strong>RCash</strong>',
      'Refactoring code to improve <strong>modular architecture</strong> and <strong>SOLID principles</strong>',
      'Maintaining <strong>CI/CD pipelines</strong> and migrating build distribution to <strong>Firebase App Distribution</strong>',
      'Contributing to <strong>AI-assisted development</strong> tooling and conducting peer code reviews'
    ],
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'CI/CD', 'Firebase', 'REST APIs']
  },
  {
    title: 'Technical Lead',
    company: 'Rakuten India',
    location: 'Bangalore, India',
    period: 'Dec 2014 - Nov 2022',
    description: [
      'Led iOS development across multiple <strong>Rakuten digital service platforms</strong> using <strong>Swift</strong> and <strong>Objective-C</strong>',
      'Built modules for <strong>content navigation</strong>, <strong>filtering workflows</strong>, and <strong>subscription management</strong>',
      'Implemented <strong>RESTful APIs</strong>, <strong>token-based authentication</strong>, <strong>Firebase analytics</strong>, and <strong>SiteCatalyst tracking</strong>',
      'Developed reusable <strong>iOS SDK components</strong> and service frameworks',
      'Implemented <strong>iBeacon proximity detection</strong> and <strong>Core Location</strong> frameworks',
      'Designed and developed <strong>Rakuten Ticket iOS app</strong> end-to-end as sole developer',
      'Configured <strong>automated build scripts</strong> and <strong>CI pipelines</strong>'
    ],
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase', 'Core Location', 'iBeacon', 'REST APIs', 'CI/CD']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Xsysys Technologies',
    location: 'Bangalore, India',
    period: 'Apr 2010 - Nov 2014',
    description: [
      'Researched and evaluated system requirements for <strong>FMCG</strong> and <strong>enterprise mobility</strong> domains',
      'Developed <strong>iOS mobile applications</strong> using <strong>Objective-C</strong> and iOS SDK',
      'Built modules for <strong>employee management</strong>, <strong>customer management</strong>, <strong>visit tracking</strong>, and <strong>order entry</strong>',
      'Integrated <strong>Sybase UltraLite</strong> mobile databases with <strong>Microsoft SQL Server</strong> backend',
      'Configured <strong>MobiLink data synchronisation</strong> for offline data capture',
      'Developed reusable components: <strong>data grids</strong>, <strong>reporting modules</strong>, and <strong>search interfaces</strong>',
      'Configured <strong>Apple development tools</strong>, <strong>SCM systems</strong>, and <strong>Xcode CI</strong> environments'
    ],
    technologies: ['Objective-C', 'Core Data', 'UIKit', 'Sybase UltraLite', 'SQL Server', 'MobiLink', 'CI/CD']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="mb-24">
      <div className="mb-16">
        <p className="text-sm font-mono text-emerald-400 mb-2">// Experience</p>
        <h2 className="text-4xl font-bold text-white">Work History</h2>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10 hidden lg:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0a0a0b] z-10 hidden lg:block"></div>

              {/* Card */}
              <div className={`w-full lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-500/10 group-hover:bg-emerald-500/20 p-3 rounded-lg flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{exp.title}</h3>
                      <p className="text-emerald-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  {/* Date and Location */}
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </div>
                  </div>

                  {/* Description - Bullet Points */}
                  <ul className="text-neutral-300 mb-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1.5 flex-shrink-0">•</span>
                        <span dangerouslySetInnerHTML={{ __html: point }} />
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
