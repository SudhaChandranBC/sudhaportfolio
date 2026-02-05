import AboutSection from '@/components/sections/AboutSection'
import Stats from '@/components/sections/Stats'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Awards from '@/components/sections/Awards'

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b] text-white">
      <div className="container mx-auto max-w-6xl">
        <AboutSection />
        <Stats />
        <Experience />
        <Skills />
        <Awards />
      </div>
    </div>
  )
}
