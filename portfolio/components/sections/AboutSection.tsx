import Image from 'next/image'

const education = [
  {
    degree: 'Post Graduate in Cloud Computing',
    institution: 'Great Lakes Institute of Management',
    year: '2020',
    focus: 'Cloud Computing'
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'KNS Institute of Technology',
    location: 'Bangalore, India',
    year: '2009'
  }
]

export default function AboutSection() {
  return (
    <section className="mb-24">
      <div className="grid lg:grid-cols-[450px,1fr] gap-16">
        {/* Left Column - Photo and Education */}
        <div className="flex flex-col h-full">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/profile.jpg"
                alt="Sudha Chandran BC"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Education */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-white">Education</h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <h3 className="font-bold text-white mb-1 text-base">{edu.degree}</h3>
                  <p className="text-neutral-400 text-xs mb-1">{edu.institution}</p>
                  <p className="text-emerald-400 text-xs font-medium">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div>
          <p className="text-sm font-mono text-emerald-400 mb-2">// About</p>
          <h1 className="text-5xl font-bold mb-2">Sudha Chandran BC</h1>
          <p className="text-neutral-400 text-xl mb-8">iOS Developer</p>

          <div className="space-y-6 mb-8">
            <p className="text-neutral-300 leading-relaxed">
              Result-driven skilled iOS Developer with a strong background in creating innovative and
              successful complex and user-focused enterprise applications. Adept at driving architectural
              improvements, delivering award-winning apps, and leading cross-functional teams.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Proficient in Swift, Objective C, Cocoa Touch, and SwiftUI, with a track record of delivering
              high-quality solutions within strict timelines. Currently based in Tokyo, Japan, working on
              cutting-edge mobile applications at Rakuten Inc.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-300">15+ years of iOS development experience</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-300">Award-winning app developer (4.6 star App Store rating)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-300">Technical Lead with team management experience</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-300">Expert in Swift, SwiftUI, and modern iOS architectures</span>
            </div>
          </div>

          {/* Download Resume Button */}
          <a
            href="/Sudha_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
