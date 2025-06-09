import react from 'react';
import Services from '@/components/Services';
import Whyus from '@/components/Whyus';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Faq from '@/components/Faq';

export default function HomePage()
{
  return(
    <div>
     <Services />
     <Whyus />
     <About />
     <Philosophy />
     <Faq/>
      </div>
  )
}