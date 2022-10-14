import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import ReCaptchaV2 from 'react-google-recaptcha'

export default function Contact(){
  const form = useRef();

  function contactMe(e){
    e.preventDefault()

    emailjs.sendForm('service_etyke2d', 'template_mzp5fd9', form.current, 'xXTff6g9v9ljHy-fX')
      .then(result => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return(
    <section id='formContacto' className="py-16 sm:p-4 bg-white dark:bg-neutral-900">
      <div className="border-2  dark:bg-neutral-900 border-gray-30 rounded-xl pb-8 lg:pb-12 px-0 mx-auto max-w-screen-md">
        <div className='h-6 bg-gray-300 rounded-t-lg flex justify-end'>
          <div className='mt-0.5 mr-1 gap-2 flex'>
            <div className='h-4 w-4 text-justify rounded-lg bg-green-500'></div>
            <div className='h-4 w-4 text-justify rounded-lg bg-yellow-400'></div>
            <div className='h-4 w-4 text-justify rounded-lg bg-red-500'></div>
          </div>

        </div>
        <div className='px-8'>
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contacto</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Puedes utilizar el siguiente formulario para comunicarte conmigo.</p>
            <form ref={form} onSubmit={contactMe} className="space-y-8" method='POST'>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo</label>
                    <input type="email" id="email" name='from_email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nombre@correo.com" required/>
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                    <input type="text" id="subject" name='from_name' className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Quiero saber..." required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
                    <textarea id="message" rows="6" name='message' className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje..."></textarea>
                </div>
                {/*<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Enviar
                    <svg className="w-5 h-5 rotate-90 ml-4" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{fill:"white"}}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>*/}
                <div className='flex justify-center'>
                  <ReCaptchaV2 sitekey='6LfPdIAiAAAAAEG9bDCIdN3A7RdFcVUmOfWcJnAz'/>
                </div>

                <div className='flex justify-center'>
                  <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-900 rounded-md group-hover:bg-opacity-0">
                        Enviar
                    </span>
                  </button>
                </div>


            </form>
        </div>

      </div>
    </section>
  )
}
