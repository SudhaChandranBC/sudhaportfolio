const awards = [
  {
    title: 'Best Entertainment App 2019',
    project: 'Bookids by Nickelodeon',
    organization: 'Appetition and Digital Life Award, France',
    year: '2019'
  },
  {
    title: 'Best Development Project',
    project: 'Rakuten PointCard SDK',
    organization: 'Rakuten',
    year: '2018'
  },
  {
    title: 'Best Rated App',
    project: 'Rakuten PointCard (4.6★)',
    organization: 'Rakuten',
    year: '2018'
  },
  {
    title: 'Most Improved App',
    project: 'Rakuten PointCard',
    organization: 'Rakuten',
    year: '2017'
  },
  {
    title: 'Best Knowledge Base Article',
    project: 'FOX SDK',
    organization: 'Rakuten',
    year: '2016'
  },
  {
    title: 'Golden Team Award',
    project: 'Lead, Team Excellence',
    organization: 'Xsysys Technologies',
    year: '2014'
  }
]

export default function Awards() {
  const getIcon = (award: typeof awards[0]) => {
    if (award.title.includes('Best Development') || award.title.includes('Knowledge')) {
      return (
        <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    } else if (award.title.includes('Best Rated') || award.title.includes('Most Improved')) {
      return (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    } else {
      return (
        <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
        </svg>
      )
    }
  }

  return (
    <section id="awards">
      <div className="mb-16">
        <p className="text-sm font-mono text-emerald-400 mb-2">// Recognition</p>
        <h2 className="text-4xl font-bold text-white">Awards and Achievements</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                {getIcon(award)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 text-white group-hover:text-amber-400 transition-colors">{award.title}</h3>
                <p className="text-emerald-400 text-sm mb-2">{award.project}</p>
                <p className="text-neutral-500 text-xs">{award.organization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
