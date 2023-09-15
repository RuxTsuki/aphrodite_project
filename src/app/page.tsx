
import { HeroSection, SearchSection, SplashScreen, TourScreen } from '@/ui/molecules';
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
      </div>
    </>

  )
}
