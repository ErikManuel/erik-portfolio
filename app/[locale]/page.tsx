import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import AnimatedSection from '@/components/AnimatedSection';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        
        <AnimatedSection animation="fade-up" delay={100}>
          <FeaturedProjects locale={locale} />
        </AnimatedSection>
        
        <AnimatedSection animation="scale-in" delay={200}>
          <Skills locale={locale} />
        </AnimatedSection>
        
        <AnimatedSection animation="slide-right" delay={300}>
          <Experience locale={locale} />
        </AnimatedSection>
      </main>
    </>
  );
}