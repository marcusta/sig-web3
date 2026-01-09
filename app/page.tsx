import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Stats } from '@/components/home/Stats';
import { Gallery } from '@/components/home/Gallery';
import { CTA } from '@/components/home/CTA';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
}
