import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SocialMediaLinks from '@/components/SocialMediaLinks';

export default function Home() {
   return (
      <main className="sm:mx-[160px] sm:my-[20px] pb-20 md:pt-20">
         <HeroSection />
         <SocialMediaLinks />
         <Skills />
         <Projects />
      </main>
   );
}
