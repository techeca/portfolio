//import {useState} from 'react'
import { motion } from 'framer-motion'
//import MyModal from 'components/common/MyModal'

import logoPuppeteer from 'images/puppeteer.webp'
import logoSwagger from 'images/logoswagger.webp'
import logoMysql from 'images/logo-mysql.webp'
import logoTaildwind from 'images/tailwindcss-icon.svg'

export default function CardAdaptable({ data, modalHandler, status }) {

  function getIcon(toolName) {
    switch (toolName) {
      case 'Javascript':
        return <i className="text-2xl align-middle fa-brands fa-js text-yellow-200"></i>
      //break;
      case 'React':
        return <i className="text-2xl align-middle fa-brands fa-react text-cyan-400"></i>
      case 'MUI':
        return <svg xmlns="http://www.w3.org/2000/svg" className='' width="32" height="34" viewBox="0 0 36 32" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
      case 'Puppeteer':
        return <img src={logoPuppeteer} className="h-8" alt="Puppeteer Logo" width='25px' height='16px' />
      case 'Swagger':
        return <img src={logoSwagger} className="h-8" alt="Swagger Logo" width='33px' height='10px' />
      case 'MySQL':
        return <img src={logoMysql} className="h-8 ml-2" alt="MYSQL Logo" width='35px' height='10px' />
      case 'Tailwind':
        return <img src={logoTaildwind} className="h-5 m-2" alt="Taildwind Logo" width='30px' height='10px' />
      case 'Python':
        return <svg className='mb-1' xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 256 255"><defs><linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%"><stop offset="0%" stopColor="#387eb8"></stop><stop offset="100%" stopColor="#366994"></stop></linearGradient><linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%"><stop offset="0%" stopColor="#ffe052"></stop><stop offset="100%" stopColor="#ffc331"></stop></linearGradient></defs><path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"></path><path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"></path></svg>
      case 'OpenCV':
        return <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 128 128"><path fill="#128dff" d="M112.871 66.602c9.004 5.277 15.055 15.027 15.074 26.191c.032 16.805-13.617 30.453-30.48 30.48c-16.863.032-30.559-13.57-30.59-30.375c-.02-11.164 5.996-20.933 14.984-26.246l8.774 14.778c.219.37.094.847-.262 1.09c-3.32 2.25-5.496 6.046-5.488 10.347c.012 6.895 5.633 12.477 12.55 12.461c6.919-.012 12.516-5.61 12.504-12.504c-.007-4.3-2.195-8.09-5.523-10.328c-.355-.242-.484-.719-.266-1.09zm0 0"></path><path fill="#8bda67" d="M45.477 66.422a30.5 30.5 0 0 0-14.907-3.867C13.703 62.555.035 76.18.035 92.985c0 16.804 13.668 30.43 30.535 30.43c16.946 0 30.95-14.337 30.524-31.212H43.906c-.453 0-.808.383-.812.832c-.043 6.723-5.672 12.434-12.524 12.434c-6.922 0-12.527-5.59-12.527-12.485S23.648 80.5 30.57 80.5c1.809 0 3.532.383 5.086 1.074c.383.168.836.04 1.047-.316zm0 0"></path><path fill="#ff2a44" d="M47.945 61.648c-8.992-5.293-15.027-15.054-15.027-26.218C32.918 18.625 46.59 5 63.453 5s30.535 13.625 30.535 30.43c0 11.164-6.035 20.925-15.027 26.218L70.21 46.86c-.219-.37-.094-.847.266-1.09c3.32-2.246 5.503-6.039 5.503-10.34c0-6.894-5.609-12.484-12.527-12.484s-12.527 5.59-12.527 12.485c0 4.3 2.183 8.093 5.504 10.34c.36.242.484.718.265 1.09zm0 0"></path></svg>
      case 'TypeScript':
        return <svg className='m-1' xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 128 128"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"></path></svg>
      case 'Express':
        return <svg className='m-1' xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#f4f2ed" rx={60}></rect><path fill="#0f0f0f" d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"></path></g></svg>
        default:
        return ''
    }
  }

  return (
    <motion.div id={data.title} whileHover={{ scale: status ? 1.05 : 1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <article onClick={() => modalHandler(status, data)} className={`${status ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700' : 'opacity-50 border border-neutral-600'} p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 select-none`}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{data.title}</h2>
        {data.description}
        <div className="grid flex-row grid-cols-3 lg:grid-cols-3 justify-between items-center">
          {data.tools.map((t, i) =>
            <div key={`${i}-${t}`} className='flex flex-col items-center'>
              {getIcon(t)}<p className='text-sm font-extrabold text-neutral dark:text-gray-50'>{t}</p>
            </div>
          )}
        </div>
      </article>
    </motion.div>
  )
}
