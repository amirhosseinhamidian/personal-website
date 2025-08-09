'use client';

import React, { useEffect, useState } from 'react';
import Loader from '@/components/modules/Loader/Loader';

import AchievementsSection from '@/components/templates/home/AchievementsSection';
import ConsultingSection from '@/components/templates/home/ConsultingSection';
import EducationExperienceSection from '@/components/templates/home/EducationExperienceSection';
import HeroSection from '@/components/templates/home/HeroSection';
import LastProjectSection from '@/components/templates/home/LastProjectSection';
import MySpecialtySection from '@/components/templates/home/MySpecialtySection';
import SkillsSection from '@/components/templates/home/SkillsSection';
import StatsCounterSection from '@/components/templates/home/StatsCounterSection';
import WorkTogetherSection from '@/components/templates/home/WorkTogetherSection';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // جلوگیری از اسکرول تا پایان لود
    document.body.classList.add('overflow-hidden');

    const finish = () => {
      setFadeOut(true);
      const t = setTimeout(() => {
        setLoading(false);
        document.body.classList.remove('overflow-hidden');
      }, 250);
      // cleanup برای همین تایمر
      return () => clearTimeout(t);
    };

    let cleanupTimer: (() => void) | undefined;

    if (document.readyState === 'complete') {
      cleanupTimer = finish();
    } else {
      const onLoad = () => {
        cleanupTimer = finish();
      };
      window.addEventListener('load', onLoad, { once: true });
      // cleanup لیسنر
      return () => {
        window.removeEventListener('load', onLoad);
        document.body.classList.remove('overflow-hidden');
        cleanupTimer?.();
      };
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      cleanupTimer?.();
    };
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      <div className='container flex flex-col gap-10 py-10'>
        <section id='intro'>
          <HeroSection />
        </section>

        <StatsCounterSection />

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          <AchievementsSection className='self-start lg:col-span-2' />
          <ConsultingSection className='self-start' />
        </div>

        <section id='skills'>
          <SkillsSection />
        </section>
        <section id='projects'>
          <LastProjectSection />
        </section>

        <MySpecialtySection />
        <EducationExperienceSection />

        <section id='contact'>
          <WorkTogetherSection />
        </section>
      </div>
    </>
  );
}
