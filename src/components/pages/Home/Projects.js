//import CardAdaptable from 'components/common/CardAdaptable'
//import CardIdea from 'components/common/CardIdea'
import logoTaildwind from 'images/tailwindcss-icon.svg'
import responsiveImg from 'images/responsive4.svg'
import homePokeapp from 'images/homePokeapp.PNG'
import regionPokeapp from 'images/regionPokeapp.PNG'
//import pokeapiLogo from 'images/pokeapiLogo.png'
import { motion } from "framer-motion"
import './badge.css'

export default function Projects(){

  function openModalProj(idModal){
    let modal = document.getElementById(idModal)
    if(window.innerWidth < 750)
    {
      modal.classList.toggle('hidden')
    }
  }

  return(
    <section className="bg-gray-50 dark:bg-neutral-900 h-full">
        <div  id='miPortfolio' className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Portfolio</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Aquí puedes encontrar algunas cosas que he hecho, selecciona una para ver más detalles.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:p-4">

                <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <article onClick={() => openModalProj('pokeAppModal')} className="p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700" data-modal-toggle="pokeAppModal">

                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PokeApp</h2>

                      {/*<figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <a href="#">
                          <img className="rounded-t-lg h-80 w-full object-cover " src="https://user-images.githubusercontent.com/53408118/182007801-3783207e-09cf-4112-936b-47d36b2b4330.png" alt="image description"/>
                        </a>
                      <figcaption className="absolute top-6 px-4 text-lg text-white">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PokeApp</h2>

                      </figcaption></figure>*/}

                      {/*<img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://user-images.githubusercontent.com/53408118/182007801-3783207e-09cf-4112-936b-47d36b2b4330.png" alt=""/>*/}
                      <p className="font-light text-gray-500 dark:text-gray-400">WebApp realizada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span>, consume la API de <span className="font-bold text-yellow-400 dark:text-yellow-200">pokeapi.co</span> para mostrar las distintas regiones y detalles de cada Pokemon.</p>

                      <div className="grid flex-row grid-cols-3 lg:grid-cols-3 justify-between items-center">
                        <div className='flex flex-col items-center'>
                          <i className="text-2xl align-middle fa-brands fa-react text-cyan-400"></i><p className='text-sm font-extrabold text-neutral dark:text-gray-50'>React</p>
                        </div>

                        <div className='flex flex-col items-center'>
                          <i className="text-2xl align-middle fa-brands fa-js text-yellow-200"></i><p className='text-sm font-extrabold text-neutral dark:text-gray-50'>Javascript</p>
                        </div>

                        <div className='flex flex-col items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='' width="32" height="34" viewBox="0 0 36 32" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
                          <p className='text-sm font-extrabold text-neutral dark:text-gray-50'>MUI</p>
                        </div>

                        {/*<div>
                          <img src={pokeapiLogo} className=" h-7" alt="PokeApi Logo" /><a className='text-sm font-extrabold text-gray-50 ml-2'>Javascript</a>
                        </div>*/}


                          {/*<span className="text-sm">14 days ago</span>*/}
                      </div>

                      {/*<div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">

                              <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />

                              <span className="font-medium dark:text-white">
                                  Jese Leos
                              </span>
                          </div>
                          <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                              Read more
                              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </a>
                      </div>*/}
                  </article>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 1 }}>
                  <article onClick={() => openModalProj('folderAppModal')} className="grid h-80 p-6 bg-white rounded-lg shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700" data-modal-toggle="folderAppModal">

                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><p>FolderApp</p></h2>

                      <p className="font-light text-gray-500 dark:text-gray-400">Es esta web, utilizando <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span> y <span className="font-bold text-sky-400">Tailwind</span> con <span className="font-bold text-blue-600">Flowbite</span> en el diseño, para animaciones Framer y formulario con EmailJs.</p>

                      <div className="grid flex-row grid-cols-4 lg:grid-cols-4 justify-between items-center">
                        <div className='flex flex-col items-center'>
                          <i className="text-2xl align-middle fa-brands fa-react text-cyan-400"></i><p className='text-sm font-extrabold text-neutral dark:text-gray-50'>React</p>
                        </div>

                        <div className='flex flex-col items-center'>
                          <i className="text-2xl align-middle fa-brands fa-js text-yellow-200"></i><p className='text-sm font-extrabold text-gray-50'>Javascript</p>
                        </div>

                        <div className='flex flex-col items-center mt-1'>
                          <img src={logoTaildwind} className="h-6" alt="Taildwind Logo" /><p className='text-sm font-extrabold text-gray-50 mt-1'>Tailwind</p>
                        </div>

                        <div className='flex flex-col items-center'>
                          <img src="https://flowbite.com/docs/images/logo.svg" className=" h-7" alt="FlowBite Logo" /><p className='text-sm font-extrabold text-gray-50 mt-1'>Flowbite</p>
                        </div>

                        {/*<div>
                          <img src={pokeapiLogo} className=" h-7" alt="PokeApi Logo" /><a className='text-sm font-extrabold text-gray-50 ml-2'>Javascript</a>
                        </div>*/}


                          {/*<span className="text-sm">14 days ago</span>*/}
                      </div>

                  </article>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 1 }}>
                    <article onClick={() => openModalProj('pokeggModal')} className="p-6 h-80 grid bg-white rounded-lg  shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700" data-modal-toggle='pokeggModal'>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><p>PokEgg</p></h2>
                      <p className="font-light text-gray-500 dark:text-gray-400">"Mascota virtual", esa es la idea principal, puedes obtener un huevo y obtener una mascota random para cuidar y alimentar.</p>
                      <div className="grid flex-row grid-cols-2 lg:grid-cols-2 justify-between items-center">
                        <div className='flex flex-col items-center'>
                          <i className="text-3xl fa-brands fa-react text-cyan-400"></i><p className='text-sm font-extrabold text-neutral dark:text-gray-50'>React</p>
                        </div>

                        <div className='flex flex-col items-center'>
                          <i className="text-3xl fa-brands fa-js text-yellow-200"></i><p className='text-sm font-extrabold text-gray-50'>Javascript</p>
                        </div>

                        {/*<div className='flex flex-col items-center'>
                          <i className="text-4xl fa-brands fa-brands fa-html5 text-orange-600"></i><a className='text-sm font-extrabold text-gray-50'>Tailwind</a>
                        </div>

                        <div className='flex flex-col items-center'>
                          <i className="text-4xl fa-brands fa-css3 text-blue-600"></i><a className='text-sm font-extrabold text-gray-50'>Flowbite</a>
                        </div>*/}




                      </div>
                    </article>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 1 }}>
                    <article onClick={() => openModalProj('crawlasModal')} className="p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700" data-modal-toggle='crawlasModal'>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><p>Crawlas</p></h2>
                      <p className="font-light text-gray-500 dark:text-gray-400">Software creado a partir de Crawlit, utilizado para generar API de Dofus en Ingles y Español, el programa obtiene de manera automática los datos desde la web con <span className="font-bold text-green-400">Puppeteer</span>.</p>
                      <div className="flex flex-row gap-1 lg:grid-cols-2 flex justify-around items-center text-gray-500">

                        <i className="text-3xl fa-brands fa-js text-yellow-200"></i>
                        <img src='https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png' className="h-10" alt="Taildwind Logo" />

                      </div>
                    </article>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 1 }}>
                    <article onClick={() => openModalProj('busystemModal')} className="p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700" data-modal-toggle='busystemModal'>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><p>Busystem</p></h2>
                      <p className="font-light text-gray-500 dark:text-gray-400">Plataforma para compra y venta de pasajes, creada con <span className="font-bold text-neutral-900 dark:text-neutral-50">NextJS</span> y base de datos <span className="font-bold text-blue-400">My</span><span className="font-bold text-orange-400">SQL</span>, pintada con <span className="font-bold text-green-300">Evergreen</span>.</p>
                      <div className="flex flex-row gap-1 lg:grid-cols-2 flex justify-around items-center text-gray-500">

                        <i className="text-3xl fa-brands fa-js text-yellow-200"></i>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968313.png' className="h-8 ml-2" alt="MYSQL Logo" />
                        <svg fill="none" className='' height="18" viewBox="0 0 394 80" xmlns="http://www.w3.org/2000/svg"><title>Next.js Logo</title><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="var(--geist-foreground)"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="var(--geist-foreground)"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fillRule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="var(--geist-foreground)"></path></svg>

                      </div>
                    </article>
                </motion.div>

                <div id="pokeAppModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>

                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                      <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">

                          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  PokeApp
                              </h3>
                              <button type="button" onClick={() => openModalProj('pokeAppModal')} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="pokeAppModal">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                             <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                                  <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                      <li className="mr-2" role="presentation">
                                          <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="tabpanel-tab" data-tabs-target="#details" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                          Detalles</button>
                                      </li>
                                      <li className="mr-2" role="presentation">
                                          <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="images-tab" data-tabs-target="#images" type="button" role="tab" aria-controls="images" aria-selected="false">
                                          Imagenes</button>
                                      </li>
                                  </ul>
                             </div>

                             <div id="myTabContent">

                                <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id="details" role="tabpanel" aria-labelledby="tabpanel-tab">

                                    <p className='mb-6 dark:text-gray-200'>PokeApp es una web en la que puede ver los detalles de cada Pokemon, está creada con React y diseñada con MUI.</p>

                                    <div className='grid grid-cols-2'>
                                      <ul className="space-y-4 text-left dark:text-gray-200">
                                          <li className="flex items-center space-x-3">

                                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                              <span>Todas las regiones</span>
                                          </li>
                                          <li className="flex items-center space-x-3">

                                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                              <span>Detalles de cada pokemon</span>
                                          </li>
                                          <li className="flex items-center space-x-3">

                                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                              <span>Modo Dark/Light</span>
                                          </li>
                                          <li className="flex items-center space-x-3">

                                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                              <span>React</span>
                                          </li>
                                          <li className="flex items-center space-x-3">

                                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                              <span>MUI</span>
                                          </li>
                                      </ul>
                                      <div className='flex justify-center items-center'>

                                        <img src={responsiveImg} className="h-48" alt="Taildwind Logo" />

                                      </div>
                                    </div>

                                </div>

                                <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id="images" role="tabpanel" aria-labelledby="images-tab">

                                      <div id="default-carousel" className="relative " data-carousel="static">

                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-56">

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                <img src="https://user-images.githubusercontent.com/53408118/182007806-009f108e-6cbc-4aaf-81fe-25e73ec479de.PNG" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                                <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                                <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>
                                        </div>

                                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>

                                      </div>

                                </div>
                              </div>

                          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              <a href='https://techeca.github.io/Pokedex-ReactJS/' target='_blank' rel='noreferrer' className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Demo
                                <i className="fa-solid fa-globe ml-2"></i>
                              </a>
                              <a href='https://github.com/techeca/Pokedex-ReactJS' target='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Github
                                <i className="fa-brands fa-github ml-2"></i>
                              </a>
                          </div>
                      </div>

                  </div>

                </div>

                <div id="folderAppModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>

                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                      <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">

                          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  FolderApp
                              </h3>
                              <button type="button" onClick={() => openModalProj('folderAppModal')} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="folderAppModal">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                          <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                              <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab2" data-tabs-toggle="#tabContentFolderApp" role="tablist">
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="tabpanel-tab2" data-tabs-target="#details2" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                      Detalles</button>
                                  </li>
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="images-tab2" data-tabs-target="#images2" type="button" role="tab" aria-controls="images" aria-selected="false">
                                      Imagenes</button>
                                  </li>
                              </ul>
                          </div>

                          <div id="tabContentFolderApp">

                              <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id="details2" role="tabpanel" aria-labelledby="tabpanel-tab2">
                                <p className='mb-6 dark:text-gray-200'>Necesitaba un lugar donde mostrar algunas cosas que estoy haciendo, en github está todo desordenado, asi que pensé...Yo soy desarrollador puedo hacer mi propia web :)</p>
                                <div className='grid grid-cols-2'>
                                    <ul className="space-y-4 text-left dark:text-gray-200">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Portfolio</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Contacto</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>CEO</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <span>No es mucho pero cumple su función.</span>
                                        </li>
                                    </ul>
                                    <div className='flex justify-center items-center'>
                                      <img src={responsiveImg} className="h-48" alt="Taildwind Logo" />
                                    </div>
                                </div>
                              </div>

                              <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id="images2" role="tabpanel" aria-labelledby="images-tab2">

                                  <div id="default-carousel2" className="relative " data-carousel="static">

                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                <img src="https://user-images.githubusercontent.com/53408118/182007806-009f108e-6cbc-4aaf-81fe-25e73ec479de.PNG" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                                <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                                <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>
                                        </div>

                                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>

                                  </div>

                              </div>
                          </div>

                          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              <a href='https://techeca.github.io/Pokedex-ReactJS/' taget='_blank' rel='noreferrer' className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Demo
                                <i className="fa-solid fa-globe ml-2"></i>
                              </a>
                              <a href='https://github.com/techeca/Pokedex-ReactJS' taget='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Github
                                <i className="fa-brands fa-github ml-2"></i>
                              </a>
                          </div>
                      </div>

                  </div>

                </div>

                <div id="pokeggModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>

                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                      <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">

                          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  PokEgg
                              </h3>
                              <button type="button" onClick={() => openModalProj('pokeggModal')} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="pokeggModal">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                          <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                              <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id="myTabpokegg" data-tabs-toggle="#tabContentPokEgg" role="tablist">
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="tabpanel-tabpokegg" data-tabs-target="#detailspokegg" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                      Detalles</button>
                                  </li>
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="images-tabpokegg" data-tabs-target="#imagespokegg" type="button" role="tab" aria-controls="images" aria-selected="false">
                                      Imagenes</button>
                                  </li>
                              </ul>
                          </div>

                          <div id="tabContentPokEgg">

                              <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id="detailspokegg" role="tabpanel" aria-labelledby="tabpanel-tabpokegg">
                                <p className='mb-6 dark:text-gray-200'>La idea general es obtener una mascota y poder "llevarla" en tu móvil, alimentarla y cuidarla.</p>
                                <div className='grid grid-cols-2'>
                                    <ul className="space-y-4 text-left dark:text-gray-200">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Genera una mascota random</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            <span>Sistema de cuidados</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            <span>Registro</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            <span>Envíar mascota vía QR</span>
                                        </li>
                                        {/*<li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>MUI</span>
                                        </li>*/}
                                    </ul>
                                    <div className='flex justify-center items-center'>
                                      <img src={responsiveImg} className="h-48" alt="Taildwind Logo" />
                                    </div>
                                </div>
                              </div>

                              <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id="imagespokegg" role="tabpanel" aria-labelledby="images-tabpokegg">

                                  <div id="default-carousel" className="relative " data-carousel="static">

                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                <img src="https://user-images.githubusercontent.com/53408118/182007806-009f108e-6cbc-4aaf-81fe-25e73ec479de.PNG" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                                <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                                <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>
                                        </div>

                                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>

                                  </div>

                              </div>
                          </div>

                          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              <a href='https://techeca.github.io/Pokedex-ReactJS/' taget='_blank' rel='noreferrer' disabled className="cursor-not-allowed text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Demo
                                <i className="fa-solid fa-globe ml-2"></i>
                              </a>
                              <a href='https://github.com/techeca/Pokedex-ReactJS' taget='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Github
                                <i className="fa-brands fa-github ml-2"></i>
                              </a>
                          </div>
                      </div>

                  </div>

                </div>

                <div id="crawlasModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>

                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                      <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">

                          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  Crawlas
                              </h3>
                              <button type="button" onClick={() => openModalProj('crawlasModal')} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crawlasModal">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                          <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                              <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id="myTabpokegg" data-tabs-toggle="#tabContentPokEgg" role="tablist">
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="tabpanel-tabpokegg" data-tabs-target="#detailspokegg" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                      Detalles</button>
                                  </li>
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="images-tabpokegg" data-tabs-target="#imagespokegg" type="button" role="tab" aria-controls="images" aria-selected="false">
                                      Imagenes</button>
                                  </li>
                              </ul>
                          </div>

                          <div id="tabContentPokEgg">

                              <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id="detailspokegg" role="tabpanel" aria-labelledby="tabpanel-tabpokegg">
                                <p className='mb-6 dark:text-gray-200'>Quería hacer una web para crear "builds" del juego Dofus, pero no existía ninguna API en español y actualizada, asi que hice la mía utilizando como base Crawlit.</p>
                                <div className='grid grid-cols-2'>
                                    <ul className="space-y-4 text-left dark:text-gray-200">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Extrae los datos (Crawlit ya no funciona)</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Genera archivos JSON con data</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Puppeteer integrado</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            <span>Falta Merkasakos, Clases y Profesiones</span>
                                        </li>
                                        {/*<li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>MUI</span>
                                        </li>*/}
                                    </ul>
                                    <div className='flex justify-center items-center'>
                                      <img src={responsiveImg} className="h-48" alt="Taildwind Logo" />
                                    </div>
                                </div>
                              </div>

                              <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id="imagespokegg" role="tabpanel" aria-labelledby="images-tabpokegg">

                                  <div id="default-carousel" className="relative " data-carousel="static">

                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                <img src="https://user-images.githubusercontent.com/53408118/182007806-009f108e-6cbc-4aaf-81fe-25e73ec479de.PNG" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                                <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                                <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>
                                        </div>

                                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>

                                  </div>

                              </div>
                          </div>

                          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              {/*<a href='https://techeca.github.io/Pokedex-ReactJS/' taget='_blank' rel='noreferrer' disabled className="cursor-not-allowed text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Demo
                                <i className="fa-solid fa-globe ml-2"></i>
                              </a>*/}
                              <a href='https://github.com/techeca/crawlas' taget='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Github
                                <i className="fa-brands fa-github ml-2"></i>
                              </a>
                          </div>
                      </div>

                  </div>

                </div>

                <div id="busystemModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>

                  <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

                      <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">

                          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  Busystem
                              </h3>
                              <button type="button" onClick={() => openModalProj('busystemModal')} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="busystemModal">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>

                          <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                              <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab2" data-tabs-toggle="#tabContentFolderApp" role="tablist">
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="tabpanel-tab2" data-tabs-target="#details2" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                      Detalles</button>
                                  </li>
                                  <li className="mr-2" role="presentation">
                                      <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="images-tab2" data-tabs-target="#images2" type="button" role="tab" aria-controls="images" aria-selected="false">
                                      Imagenes</button>
                                  </li>
                              </ul>
                          </div>

                          <div id="tabContentFolderApp">

                              <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id="details2" role="tabpanel" aria-labelledby="tabpanel-tab2">
                                <p className='mb-6 dark:text-gray-200'>Creada netamente para practicar NextJS, JS, registros, conexión a base de datos, JWT, etc.</p>
                                <div className='grid grid-cols-2'>
                                    <ul className="space-y-4 text-left dark:text-gray-200">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Registro</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Ver estados de pasajes (como usuario)</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>Admin Panel (CRUD de pasajes)</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            <span>JWT</span>
                                        </li>
                                    </ul>
                                    <div className='flex justify-center items-center'>
                                      <img src={responsiveImg} className="h-48" alt="Taildwind Logo" />
                                    </div>
                                </div>
                              </div>

                              <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id="images2" role="tabpanel" aria-labelledby="images-tab2">

                                  <div id="default-carousel2" className="relative " data-carousel="static">

                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                                <img src="https://user-images.githubusercontent.com/53408118/182007806-009f108e-6cbc-4aaf-81fe-25e73ec479de.PNG" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                                <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>

                                            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                                <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                            </div>
                                        </div>

                                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>

                                  </div>

                              </div>
                          </div>

                          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              <a href='https://busystem.vercel.app/' taget='_blank' rel='noreferrer' className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Demo
                                <i className="fa-solid fa-globe ml-2"></i>
                              </a>
                              <a href='https://github.com/techeca/NextJS-JWT' taget='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Github
                                <i className="fa-brands fa-github ml-2"></i>
                              </a>
                          </div>
                      </div>

                  </div>

                </div>

                {/*<article className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
                      <img className="object-cover w-full rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt=""/>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      </div>
                </article>*/}
            </div>
        </div>
      </section>
  )
}
