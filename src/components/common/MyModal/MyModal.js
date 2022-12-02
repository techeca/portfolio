import {useState} from 'react'
import {motion} from 'framer-motion'
import QRCode from 'react-qr-code'

/*import homePokeapp from 'images/homePokeapp.webp'
import regionPokeapp from 'images/regionPokeapp.webp'
import detailPokeapp from 'images/detail-pokeapp.webp'
import responsiveImg from 'images/responsive4.svg'
import scanImg from 'images/scanme.jpg'*/
import scanthis from 'images/scanthis.png'

export default function MyModal({modalHandler, data}){
  const [contentSelected, setContentSelected] = useState('detalles')
  const [actualImg, setActualImg] = useState(0)

  function changeContent(content){
    setContentSelected(content)
  }
  function prevImage(){
    //actualImg - 1 <= 0 ? setActualImg(images.length) : setActualImg(actualImg - 1)
    actualImg > 0 ? setActualImg(actualImg - 1) : setActualImg(data.images.length - 1)
  }
  function nextImage(){
    actualImg + 1 >= data.images.length ? setActualImg(0) : setActualImg(actualImg + 1)
  }

  return(
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} id={`${data.title}-modal`} tabIndex="-1" aria-hidden="true" className=" flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full" style={{background: "rgba(26, 26, 26, 0.8)"}}>
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-neutral-800 border dark:border-neutral-600">
              {/*Titulo y close button*/}
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {data.title}
                  </h3>
                  <button type="button" name='btnCerrar' onClick={() => modalHandler(data.title, data.status)} className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-400 dark:text-gray-50" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
              </div>

              {/*Secciones Detalles e imagenes*/}
              <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                      <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center" id={`myTab-${data.title}`} data-tabs-toggle={`myTabContent-${data.title}`} role="tablist">
                          <li className="mr-2" role="presentation">
                              <button onClick={() => changeContent('detalles')} className={`${contentSelected === 'detalles' ? 'hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 text-blue-600' : 'hover:text-gray-600 border-transparent hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700'} inline-block p-4 rounded-t-lg border-b-2`} data-tabs-target="#details" type="button" role="tab" aria-controls="profile" aria-selected="true">
                              Detalles</button>
                          </li>
                          <li className="mr-2" role="presentation">
                              <button onClick={() => changeContent('imagenes')} className={`${contentSelected === 'imagenes' ? 'hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 text-blue-600' : 'hover:text-gray-600 border-transparent hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700'} inline-block p-4 rounded-t-lg border-b-2`} id={`images-tab-${data.title}`} data-tabs-target={`#images-${data.title}`} type="button" role="tab" aria-controls={`images-${data.title}`} aria-selected="false">
                              Imagenes</button>
                          </li>
                      </ul>
              </div>

              {/*Contenedor Detalles e imagenes*/}
              <div id={`myTabContent-${data.title}`}>

                {contentSelected === 'detalles' ?
                  /*Detalles o qr para ver en moviles*/
                  <div className="p-4 m-4 bg-gray-50 rounded-lg dark:bg-neutral-700" id={`${data.title}-details`} role="tabpanel" aria-labelledby="tabpanel-tab">
                          <p className='mb-6 dark:text-gray-200'>Escanea el código QR para ver la Demo desde tu teléfono.</p>
                          <div className='grid sm:grid-cols-2 xs:grid-cols-1'>
                            <img src={scanthis} className="sm:block xs:hidden justify-self-center self-center" alt="Imagen escanea el código QR" />

                            {/*Código QR*/}
                            <div className='flex justify-center items-center'>
                              <QRCode className={`rounded-md`} value={data.urls.demo} />
                            </div>
                          </div>
                  </div>
                  :
                  /*Imagenes*/
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-neutral-800" id={`images-${data.title}`} role="tabpanel" aria-labelledby={`images-tab-${data.title}`}>
                    <div id={`carousel-${data.title}`} className="relative " data-carousel="static">

                              {/*imagenes*/}
                              <div className="relative h-56 overflow-hidden rounded-lg md:h-64">

                                {data.images.length > 0 ?
                                  data.images.map((im, i) =>
                                    <div key={`img-${i}`} className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${actualImg === i ? 'z-20 translate-x-0' : 'z-10 translate-x-full'}`} data-carousel-item="">
                                        {/*<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>*/}
                                        {/*console.log(i)*/}
                                        {/*console.log(actualImg === i)*/}
                                        <img src={im} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                    </div>
                                  )
                                  :
                                  <>No images</>
                                }
                                  {/*<div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                                      <img src={detailPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                  </div>

                                  <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                                      <img src={homePokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                  </div>

                                  <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                                      <img src={regionPokeapp} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                                  </div>*/}
                              </div>

                              {/*circulo para mostrar imagen actual*/}
                              {/*<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                  <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                  <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                  <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                              </div>*/}

                              {/*cambiar imagen izq*/}
                              <button type="button" onClick={() => prevImage()} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                      <span className="sr-only">Previous</span>
                                  </span>
                              </button>

                              {/*cambiar imagen der*/}
                              <button type="button" onClick={() => nextImage()} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-500/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                      <span className="sr-only">Next</span>
                                  </span>
                              </button>

                    </div>
                  </div>
                }
              </div>

              {/*Botones ver web y repositorio*/}
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <a href={data.urls.demo} target='_blank' rel='noreferrer' className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver Demo
                    <i className="fa-solid fa-globe ml-2"></i>
                  </a>
                  <a href={data.urls.git} target='_blank' rel='noreferrer' className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    Github
                    <i className="fa-brands fa-github ml-2"></i>
                  </a>
              </div>
          </div>
      </div>
    </motion.div>
  )
}
