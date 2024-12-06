import detailfolderapp from 'images/detailfolderapp.webp'
import detailfolderapp2 from 'images/detailfolderapp2.webp'
/*import pokegg1 from 'images/pokeggdetails.webp'
import pokegg2 from 'images/pokeggexample1.webp'
import pokegg3 from 'images/pokeggexample2.webp'
import pokegg4 from 'images/pokeggstart.webp'*/
import crawlas1 from 'images/crawlasexe.webp'
import crawlas2 from 'images/crawlasexe2.webp'
import crawlas3 from 'images/crawlasexe3.webp'

import todoList1 from 'images/todolist1.webp'
import todoList2 from 'images/todolist2.webp'
import todoList3 from 'images/todolist3.webp'

import homePokeapp from 'images/homePokeapp.webp'
import regionPokeapp from 'images/regionPokeapp.webp'
import detailPokeapp from 'images/detail-pokeapp.webp'

import crypto1 from 'images/crypto1.webp'
import crypto2 from 'images/crypto2.webp'
import crypto3 from 'images/crypto3.webp'

import webgt1 from 'images/webgt1.webp'
import webgt2 from 'images/webgt2.webp'
//import webgt3 from 'images/webgt3.webp'

import autobot1 from 'images/autobot.webp'

//import responsiveImg from 'images/responsive4.svg'
import { useState } from 'react'
import MyModal from 'components/common/MyModal'
//import {motion} from 'framer-motion'
import CardAdaptable from 'components/common/CardAdaptable'

export default function Projects() {
  const [openModal, setOpenModal] = useState(false)

  function openModalProj(status, data) {
    !openModal && status ? setOpenModal(data) : setOpenModal(false)
  }

  const pokeAppData = {
    title: 'PokeApp',
    description: <p className="font-light text-gray-500 dark:text-gray-400">WebApp realizada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span>, consume la API de <span className="font-bold text-yellow-400 dark:text-yellow-200">pokeapi</span> para mostrar las distintas regiones y detalles de cada Pokemon.</p>,
    urls: { demo: 'https://techeca.github.io/Pokedex-ReactJS/', git: 'https://github.com/techeca/Pokedex-ReactJS' },
    images: [detailPokeapp, homePokeapp, regionPokeapp],
    tools: ['Javascript', 'React', 'MUI'],
    status: true
  }
  const apiDofus = {
    title: 'Crawlas + API Dofus',
    description: <p className="font-light text-gray-500 dark:text-gray-400">Software creado a partir de Crawlit, utilizado para generar API de Dofus en Ingles y Español, el programa obtiene de manera automática los datos desde la web con <span className="font-bold text-green-400">Puppeteer</span>.</p>,
    urls: { demo: 'https://dofus-api.onrender.com/api-docs/', git: 'https://github.com/techeca/API-Dofus' },
    images: [crawlas1, crawlas2, crawlas3],
    tools: ['Javascript', 'Puppeteer', 'Swagger'],
    status: true
  }
  const busystem = {
    title: <p>Busystem - <span className='text-lg text-red-400'>BD OFF</span></p>,
    description: <p className="font-light text-gray-500 dark:text-gray-400">Plataforma para compra y venta de pasajes, creada con <span className="font-bold text-neutral-900 dark:text-neutral-50">NextJS</span> y base de datos <span className="font-bold text-blue-400">My</span><span className="font-bold text-orange-400">SQL</span>, pintada con <span className="font-bold text-green-300">Evergreen</span>.</p>,
    urls: { demo: 'https://busystem.vercel.app/', git: 'https://github.com/techeca/NextJS-JWT' },
    images: '',
    tools: ['Javascript', 'MySQL'],
    status: false
  }
  const todoList = {
    title: 'TODO List',
    description: <p className="font-light text-gray-500 dark:text-gray-400">App simple para guardar lista de TODO, con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span> y <span className="font-bold text-sky-400">Tailwind</span>, diseño basado de proyecto en figma.</p>,
    urls: { demo: 'https://techeca.github.io/todoList/', git: 'https://github.com/techeca/todoList' },
    images: [todoList1, todoList2, todoList3],
    tools: ['Javascript', 'React', 'Tailwind'],
    status: true
  }
  const cryptoList = {
    title: 'Crypto List',
    description: <p className="font-light text-gray-500 dark:text-gray-400">Utiliza la API de <span className="font-bold text-green-500 dark:text-green-400">CoinGecko</span> para obtener datos actulizados de cryptos y markets, creada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span> y AXIOS, diseño con MUI</p>,
    urls: { demo: 'https://techeca.github.io/CryptoList-ReactJS', git: 'https://github.com/techeca/CryptoList-ReactJS' },
    images: [crypto1, crypto2, crypto3],
    tools: ['Javascript', 'React', 'MUI'],
    status: true
  }
  const folderApp = {
    title: 'FolderApp',
    description: <p className="font-light text-gray-500 dark:text-gray-400">Es esta web, utilizando <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span> y <span className="font-bold text-sky-400">Tailwind</span> con <span className="font-bold text-blue-600">Flowbite</span> en el diseño, para animaciones Framer y formulario con EmailJs.</p>,
    urls: { demo: '', git: 'https://github.com/techeca/portfolio' },
    images: [detailfolderapp, detailfolderapp2],
    tools: ['Javascript', 'React', 'Tailwind'],
    status: true
  }
  const gatoCosmicoWeb = {
    title: 'Web GT',
    description: <p className="font-light text-gray-500 dark:text-gray-400">Web estática para presentar un SaaS, creado con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span> y <span className="font-bold text-sky-400">Tailwind</span>, con animaciones y transiciones comúnes.</p>,
    urls: { demo: 'https://gatocosmico.onrender.com/', git: 'https://github.com/techeca/gatoCosmico' },
    images: [webgt1, webgt2],
    tools: ['Javascript', 'React', 'Tailwind'],
    status: true
  }
  const autoBot = {
    title: 'AutoBot',
    description: <p className="font-light text-gray-500 dark:text-gray-400">Software para automatizar tareas simples, diseñado con <span className="font-bold text-cyan-500 dark:text-blue-400">Python</span>, <span className="font-bold text-sky-400">OpenCV</span> y <span className="font-bold text-green-400">TesseractOCR</span> para obtener texto en pantalla.</p>,
    urls: { demo: 'https://github.com/techeca/automation-bot', git: 'https://github.com/techeca/automation-bot' },
    images: [autobot1],
    tools: ['Python', 'OpenCV'],
    status: true
  }
  const gatoCosmico = {
    title: 'GatoCósmico',
    description: <p className="font-light text-gray-500 dark:text-gray-400">SaaS de agendamiento para clínicas veterinarias, desarrollado con <span className="font-bold text-cyan-500 dark:text-blue-400">TypeScript</span> y <span className="font-bold text-sky-400">React</span> para el frontend.</p>,
    urls: { demo: 'https://frontend-gatocosmico-ts.onrender.com', git: 'https://github.com/techeca/frontend-gatocosmico-ts' },
    images: [detailfolderapp, detailfolderapp2],
    tools: ['TypeScript', 'React', 'Express'],
    status: true
  }

  return (
    <>
      <section className="bg-gray-100 dark:bg-neutral-900 h-full">
        <div id='miPortfolio' className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center m-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-700 dark:text-white">Portafolio</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Selecciona una tarjeta para ver más detalles.</p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 bg-gray-100 dark:bg-neutral-900 p-6 xl:px-32 pb-12">

        <CardAdaptable modalHandler={openModalProj} data={gatoCosmico} status={gatoCosmico.status} />
        <CardAdaptable modalHandler={openModalProj} data={autoBot} status={autoBot.status} />
        <CardAdaptable modalHandler={openModalProj} data={gatoCosmicoWeb} status={gatoCosmicoWeb.status} />
        <CardAdaptable modalHandler={openModalProj} data={pokeAppData} status={pokeAppData.status} />
        <CardAdaptable modalHandler={openModalProj} data={apiDofus} status={apiDofus.status} />
        <CardAdaptable modalHandler={openModalProj} data={folderApp} status={folderApp.status} />
        <CardAdaptable modalHandler={openModalProj} data={cryptoList} status={cryptoList.status} />
        <CardAdaptable modalHandler={openModalProj} data={todoList} status={todoList.status} />
        {/*<motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 1 }}>
              <article className="p-6 h-80 grid bg-white rounded-lg  shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 select-none">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><p>PokEgg</p></h2>
                <p className="font-light text-gray-500 dark:text-gray-400">"Mascota virtual", esa es la idea principal, puedes obtener un huevo y obtener una mascota random para cuidar y alimentar.</p>
                <div className="grid flex-row grid-cols-2 lg:grid-cols-2 justify-between items-center">
                  <div className='flex flex-col items-center'>
                    <i className="text-3xl fa-brands fa-react text-cyan-400"></i><p className='text-sm font-extrabold text-neutral dark:text-gray-50'>React</p>
                  </div>

                  <div className='flex flex-col items-center'>
                    <i className="text-3xl fa-brands fa-js text-yellow-200"></i><p className='text-sm font-extrabold text-gray-50'>Javascript</p>
                  </div>

                  <div className='flex flex-col items-center'>
                    <i className="text-4xl fa-brands fa-brands fa-html5 text-orange-600"></i><a className='text-sm font-extrabold text-gray-50'>Tailwind</a>
                  </div>

                  <div className='flex flex-col items-center'>
                    <i className="text-4xl fa-brands fa-css3 text-blue-600"></i><a className='text-sm font-extrabold text-gray-50'>Flowbite</a>
                  </div>

                </div>
              </article>
          </motion.div>*/}

        <CardAdaptable modalHandler={openModalProj} data={busystem} status={busystem.status} />

      </div>
      {!openModal ?
        <div className={'hidden'} >No modal</div>
        :
        <MyModal modalHandler={openModalProj} data={openModal} />
      }

    </>
  )
}
