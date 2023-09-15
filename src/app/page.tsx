
import { HeroSection, OurSelections, SearchSection, SplashScreen, TourScreen } from '@/ui/molecules';
import { Header, SideMenu } from '@/ui/orgnaisms';

export default function Home() {


  return (
    <>
      {/* SCREENS */}
      <SplashScreen />
      <TourScreen />

      <SideMenu />

      <div className='main-content h-[1000px]'>
        <Header />
        <HeroSection />
        <SearchSection />
        <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />
        <OurSelections />
      </div>
    </>

  )
}
