import {useState} from 'react'
import {motion} from 'framer-motion'

export default function MiHead(){
  const [isOpen, setIsOpen] = useState(false)

  function openMegaMenu(){
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return(
      <nav className="bg-white border-gray-200 px-2 md:px-4 py-2 dark:bg-neutral-900 border-b-2 dark:border-neutral-800">
          <div className="flex flex-wrap justify-between items-center mx-auto xl:px-32 px-4">
              <a href="https://github.com/techeca" className="flex items-center text-xl font-semibold dark:text-gray-300 text-gray-600">
                  Jim<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-500">&nbsp;Vásquez</span>
              </a>
              <div className="flex items-center md:order-2">
                <button onClick={openMegaMenu} name='btnMenu' type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <motion.div initial={{ height:isOpen ? 0 : ''}} animate={{height:isOpen ? '' : 0}} transition={{duration: 0.4}} className={`justify-between items-center w-full md:flex md:w-auto md:order-2`}>
                  <ul className="flex flex-col mt-4 text-sm font-bold md:flex-row md:space-x-8 md:mt-0">
                    <li>
                      <motion.a href="#formContacto" initial={{ opacity:isOpen ? 1 : 0}} animate={{ opacity:isOpen ? 1 : 0}} transition={{duration: isOpen ? 1.8 : 0.3}} className="md:hidden opacity-0 block py-2 pr-4 pl-3 text-gray-700 text-center border-gray-100 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:dark:hover:text-gray-300 md:p-0 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">
                              Contacto
                      </motion.a>
                    </li>
                  </ul>
              </motion.div>
              <div className='md:block sm:hidden xs:hidden justify-between items-center w-full md:flex md:w-auto md:order-2'>
                  <ul className='flex flex-col mt-4 text-sm font-bold md:flex-row md:space-x-8 md:mt-0'>
                    <li>
                      <a href="#formContacto" className="block py-2 pr-4 pl-3 text-gray-700 text-center border-gray-100 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:dark:hover:text-gray-300 md:p-0 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">
                        Contacto
                      </a>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
