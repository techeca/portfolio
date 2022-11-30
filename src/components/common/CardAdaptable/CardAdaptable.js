import {useState} from 'react'
import {motion} from 'framer-motion'
import MyModal from 'components/common/MyModal'

import logoPuppeteer from 'images/puppeteer.webp'
import logoSwagger from 'images/logoswagger.webp'
import logoMysql from 'images/logo-mysql.webp'
import logoTaildwind from 'images/tailwindcss-icon.svg'

export default function CardAdaptable({title, description, urls, images, tools, status}){
  const [showModal, setShowModal] = useState(false)

  function openModalProj(status){
    //let modal = document.getElementById(idModal)
    //if(window.innerWidth && status && showModal) modal.classList.toggle('hidden')
    !showModal && status ? setShowModal(true) : setShowModal(false)
  }

  function getIcon(toolName){
    switch (toolName) {
      case 'Javascript':
        return <i className="text-2xl align-middle fa-brands fa-js text-yellow-200"></i>
        //break;
      case 'React':
        return <i className="text-2xl align-middle fa-brands fa-react text-cyan-400"></i>
      case 'MUI':
        return <svg xmlns="http://www.w3.org/2000/svg" className='' width="32" height="34" viewBox="0 0 36 32" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
      case 'Puppeteer':
        return <img src={logoPuppeteer} className="h-10" alt="Puppeteer Logo" />
      case 'Swagger':
        return <img src={logoSwagger} className="h-10" alt="Swagger Logo" />
      case 'MySQL':
        return <img src={logoMysql} className="h-8 ml-2" alt="MYSQL Logo" />
      case 'Tailwind':
        return <img src={logoTaildwind} className="h-5 m-2" alt="Taildwind Logo" />
      default:
        return ''
    }
  }

  return(
    <>
      <motion.div whileHover={{ scale: status ? 1.05 : 1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <article onClick={() => openModalProj(status)} className={`${status ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700' : 'opacity-50 border border-neutral-600'} p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 select-none`}>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{title}</h2>
              {description}
              <div className="grid flex-row grid-cols-3 lg:grid-cols-3 justify-between items-center">
              {tools.map((t, i) =>
                <div key={`${i}-${t}`} className='flex flex-col items-center'>
                {getIcon(t)}<p className='text-sm font-extrabold text-neutral dark:text-gray-50'>{t}</p>
                </div>
              )}
              </div>
         </article>
      </motion.div>

      {showModal ?
        <MyModal title={title} urls={urls} openModalProj={openModalProj} status={status} images={images} urlWeb={urls.demo} />
        :
        <></>
      }
    </>
  )
}
