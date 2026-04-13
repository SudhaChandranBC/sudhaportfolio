const experiences = [
  {
    title: 'Application Engineer',
    company: 'Rakuten Inc',
    location: 'Tokyo, Japan',
    period: 'Nov 2022 - Present',
    description: 'Researching, analysing, and evaluating iOS software application system requirements in collaboration with backend and product teams to define API contracts, technical specifications, and scalable mobile architecture solutions. Designing and implementing scalable iOS software application architecture using Swift and MVVM. Developing core modules including Missions, SuperPoints, Wallet, Home Platform, and RCash. Refactoring code to improve modular architecture and SOLID principles. Maintaining CI/CD pipelines and migrating build distribution to Firebase App Distribution. Contributing to AI-assisted development tooling and conducting peer code reviews.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest', 'CI/CD', 'Firebase', 'REST APIs']
  },
  {
    title: 'Technical Lead',
    company: 'Rakuten India',
    location: 'Bangalore, India',
    period: 'Dec 2014 - Nov 2022',
    description: 'Researching and analysing mobile software application system requirements across multiple Rakuten digital service platforms. Designing and developing iOS applications in Swift and Objective-C, delivering modules for content navigation, filtering workflows, and subscription management. Coding RESTful APIs, token-based authentication, Firebase analytics, and SiteCatalyst tracking. Developing reusable iOS SDK components and service frameworks. Implementing iBeacon proximity detection and Core Location frameworks. Designed and developed Rakuten Ticket iOS app end-to-end as sole developer. Writing automated build scripts and configuring CI pipelines.',
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase', 'Core Location', 'iBeacon', 'REST APIs', 'CI/CD']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Xsysys Technologies',
    location: 'Bangalore, India',
    period: 'Apr 2010 - Nov 2014',
    description: 'Researching, consulting, and evaluating software application system requirements within FMCG and enterprise mobility domains to identify functional gaps and define technical specifications. Designing and developing iOS mobile applications using Objective-C and iOS SDK for employee management, customer management, visit tracking, order entry, and operational reporting. Writing source code integrated with Sybase UltraLite mobile databases and Microsoft SQL Server enterprise backend systems. Configuring MobiLink data synchronisation for offline data capture. Developing reusable components including data grids, reporting modules, and search interfaces. Configuring Apple development tools, SCM systems, and Xcode CI environments.',
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

                  {/* Description */}
                  <p className="text-neutral-300 mb-4">{exp.description}</p>

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
