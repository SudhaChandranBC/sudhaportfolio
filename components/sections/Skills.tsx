const skills = {
  'Languages': [
    'Swift',
    'Objective-C',
    'React Native',
    'JavaScript'
  ],
  'Frameworks': [
    'SwiftUI',
    'Cocoa Touch',
    'UIKit',
    'Core Data',
    'XCTest'
  ],
  'Tools': [
    'Xcode',
    'Git',
    'CocoaPods',
    'Firebase',
    'JIRA',
    'AppStore Connect'
  ],
  'Architecture': [
    'MVC',
    'MVVM',
    'MVM',
    'Clean Architecture'
  ],
  'Cloud': [
    'AWS',
    'Lambda',
    'S3',
    'DynamoDB',
    'CloudFront'
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="mb-24">
      <div className="mb-16">
        <p className="text-sm font-mono text-emerald-400 mb-2">// Skills</p>
        <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-neutral-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
