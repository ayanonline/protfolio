import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SocialMediaLinks from '@/components/SocialMediaLinks';

export default function Home() {
   return (
      <main className="sm:mx-[160px] sm:my-[20px]">
         <HeroSection />
         <SocialMediaLinks />
         <Skills />
         <Projects />
      </main>
   );
}
