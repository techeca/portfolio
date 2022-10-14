//import Banner from './Banner.js'
//import Hero from './Hero.js'

import MiHead from 'components/layout/MiHead'
import Projects from './Projects.js'
import Contact from 'components/pages/Contact'
import MiFooter from 'components/layout/MiFooter'

export default function Home(){

  return(
    <>
      <MiHead />
      <main>
        <Projects />
        <Contact />
      </main>
      <MiFooter />
    </>
  )
}
