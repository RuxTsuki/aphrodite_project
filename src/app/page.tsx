
import { SplashScreen, TourScreen } from '@/ui/molecules';
import { Header, SideMenu } from '@/ui/orgnaisms';

export default function Home() {


  return (
    <>
      {/* SCREENS */}
      <SplashScreen />
      <TourScreen />

      <SideMenu />

      <div className='main-content'>
        <Header />
        <main className="h-[1000px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A in tempore perspiciatis odio hic ducimus quibusdam voluptatum cu
          piditate, pariatur doloremque minima dolores quod aspernatur, aut, harum repudiandae soluta at ab!
        </main>
      </div>
    </>

  )
}
