export default function Stats() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '20+', label: 'Apps Delivered' },
    { value: '4.6', label: 'App Store Rating' },
    { value: '5', label: 'Awards Won' }
  ]

  return (
    <section className="mb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-8 text-center rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
            <div className="text-neutral-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
