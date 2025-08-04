import AchievementsSection from '@/components/templates/home/AchievementsSection';
import ConsultingSection from '@/components/templates/home/ConsultingSection';
import EducationExperienceSection from '@/components/templates/home/EducationExperienceSection';
import HeroSection from '@/components/templates/home/HeroSection';
import LastProjectSection from '@/components/templates/home/LastProjectSection';
import MySpecialtySection from '@/components/templates/home/MySpecialtySection';
import SkillsSection from '@/components/templates/home/SkillsSection';
import StatsCounterSection from '@/components/templates/home/StatsCounterSection';
import WorkTogetherSection from '@/components/templates/home/WorkTogetherSection';
import React from 'react';
export default function Home() {
  return (
    <div className='container flex flex-col gap-10 py-10'>
      <section id='intro'>
        <HeroSection />
      </section>
      <StatsCounterSection />
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <AchievementsSection className='self-start lg:col-span-2' />
        <ConsultingSection className='self-start' />
      </div>
      <section id='expertise'>
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
  );
}
