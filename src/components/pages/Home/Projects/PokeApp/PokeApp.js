import homePokeapp from 'images/homePokeapp.webp'
import regionPokeapp from 'images/regionPokeapp.webp'
import detailPokeapp from 'images/detail-pokeapp.webp'
//import CardIdea from 'components/common/CardIdea'

export default function PokeApp(){

  return(
    <>
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PokeApp</h2>

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
    </div>
</>
  )
}
