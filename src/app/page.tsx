import { ToggleTheme, } from '@/ui/atoms';
import { Prueba } from '@/ui/atoms';
import { SplashScreen, TourScreen } from '@/ui/molecules';
import { Header } from '@/ui/orgnaisms/Header';

export default function Home() {
  return (
    <>
      {/* SCREENS */}
      <SplashScreen />
      <TourScreen />

      <Header />

      <div className='h-[200px]'>
        {/* <Prueba /> */}
      </div>

      <main className=" h-[1000px]">
        <ToggleTheme />
      </main>
    </>

  )
}
