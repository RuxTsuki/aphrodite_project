
import { SplashScreen, TourScreen } from '@/ui/molecules';
import { HeroSection } from '@/ui/molecules/HeroSection';
import { Header, MainContent, SideMenu } from '@/ui/orgnaisms';

export default function Home() {


  return (
    <>
      {/* SCREENS */}
      <SplashScreen />
      <TourScreen />

      <SideMenu />

      <div className='main-content bg-[#F6F8F5]'>
        <Header />
        <HeroSection />
        <MainContent />


        {/* 
        <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />
        <OurSelections /> */}
      </div>
    </>

  )
}
