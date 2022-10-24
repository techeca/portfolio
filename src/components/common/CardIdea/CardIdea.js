import logoTaildwind from 'images/tailwindcss-icon.svg'
import {motion} from 'framer-motion'

export default function CardIdea({Content, controlModal}){

  function openModalProj(idModal){
    let modal = document.getElementById(idModal)
    /*if(modal.classList.contains('hidden'))
      {
        console.log('puta mierda')
        modal.classList.remove('hidden')
      }else {
        modal.classList.add('hidden')
      }*/
      if(window.innerWidth < 430)
      {
        modal.classList.toggle('hidden')
      }
      //modal.classList.toggle('hidden')
  }

  return(
    <motion.div  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <article onClick={() => openModalProj(`${controlModal}`)} className="p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 select-none" data-modal-toggle="pokeAppModal">
      <Content />
      </article>
    </motion.div>
  )
}
