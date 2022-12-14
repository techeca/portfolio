export default function MiFooter(){

  return(
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-neutral-900">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Creado por <a href="https://github.com/techeca" className="hover:underline">Jim Vásquez</a>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#miPortfolio" className="mr-4 hover:underline md:mr-6 ">Inicio</a>
            </li>
            <li>
                <a href="#formContacto" className="hover:underline">Contacto</a>
            </li>
        </ul>
    </footer>
  )
}
