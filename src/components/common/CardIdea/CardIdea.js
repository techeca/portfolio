import logoTaildwind from 'images/tailwindcss-icon.svg'

export default function CardIdea({title, description}){

  return(
    <article className="p-6 h-80 grid border bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="https://github.com/">PokeApp</a></h2>
      <p className="font-light text-gray-500 dark:text-gray-400">{description}</p>
      <div className="flex flex-row gap-1 lg:grid-cols-4 flex justify-between items-center text-gray-500">
        <i className="text-3xl fa-brands fa-react text-cyan-400"></i>
        <i className="text-3xl fa-brands fa-js text-yellow-200"></i>
        <img src={logoTaildwind} className="h-6" alt="Taildwind Logo" />
        <img src="https://flowbite.com/docs/images/logo.svg" className=" h-7" alt="FlowBite Logo" />
      </div>
    </article>
  )
}
