const experiences = [
  {
    title: 'Application Engineer',
    company: 'Rakuten Inc',
    location: 'Tokyo, Japan',
    period: 'Nov 2022 - Present',
    description: 'Driving development of new Cash Transfer app. Improved project build time and loading time. Owner of ecosystem modules like SPS, Missions, Discovery, Wallet and Home tab.',
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'XCTest']
  },
  {
    title: 'Technical Lead',
    company: 'Rakuten India',
    location: 'Bangalore, India',
    period: 'Dec 2014 - Nov 2022',
    description: 'Led development of Point Card App and SDK, winning best development project and best rated app awards with 4.6 rating. Delivered EventGate app single-handedly within 3 months.',
    technologies: ['Swift', 'Objective-C', 'CocoaPods', 'Firebase']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Xsysys Technologies',
    location: 'Bangalore, India',
    period: 'Apr 2010 - Nov 2014',
    description: 'Built SFIPad app from scratch and delivered to customers. Led development of iCatch iPhone app for Shell India. Led team of iOS engineers and provided training.',
    technologies: ['Objective-C', 'Core Data', 'UIKit']
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
