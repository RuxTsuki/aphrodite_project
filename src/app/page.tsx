import { ToggleTheme, } from '@/ui/atoms';
import { Prueba } from '@/ui/atoms';
import { SplashScreen, TourScreen } from '@/ui/molecules';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <TourScreen />

      <main className="flex h-[1500px] flex-col items-center justify-between p-24">


        <ToggleTheme />


        <Prueba />


      </main>
    </>

  )
}
