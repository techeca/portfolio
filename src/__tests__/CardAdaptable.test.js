import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import CardAdaptable from 'components/common/CardAdaptable'

test('Renderiza tarjeta y status true', () => {
  //Renderiza componente en el virtual dom
  //DESCRIPTION SIN HTML
  const mockDataProyecto = {
    title:'PokeApp',
    description:'WebApp realizada con React, consume la API de pokeapi para mostrar las distintas regiones y detalles de cada Pokemon.',
    urls: {demo:'https://techeca.github.io/Pokedex-ReactJS/', git:'https://github.com/techeca/Pokedex-ReactJS'},
    tools:['Javascript', 'React', 'MUI'],
    status: true
  }

  //Tarjeta de proyecto
  const mockHandler = jest.fn()
  const tarjeta = render(<CardAdaptable modalHandler={mockHandler} data={mockDataProyecto} status={true} />)

  //Titulo y descripcion
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.title)
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.description)

  //Herramientas
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[0])
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[1])
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[2])

  //activado
  const article = tarjeta.getByRole('article')
  expect(article.className).toEqual('cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700 p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 select-none')
  fireEvent.click(article)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})

test('Renderiza tarjeta y status false', () => {
  const mockDataProyecto = {
    title:'PokeApp',
    description:'WebApp realizada con React, consume la API de pokeapi para mostrar las distintas regiones y detalles de cada Pokemon.',
    urls: {demo:'https://techeca.github.io/Pokedex-ReactJS/', git:'https://github.com/techeca/Pokedex-ReactJS'},
    tools:['Puppeteer', 'Swagger', 'MySQL', 'Tailwind', ''],
    status: false
  }
  const mockHandler = jest.fn()
  const tarjeta = render(<CardAdaptable modalHandler={mockHandler} data={mockDataProyecto} status={false} />)

  //Titulo y descripcion
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.title)
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.description)

  //Herramientas
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[0])
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[1])
  expect(tarjeta.container).toHaveTextContent(mockDataProyecto.tools[2])

  //desactivado
  const article = tarjeta.getByRole('article')
  expect(article.className).toEqual('opacity-50 border border-neutral-600 p-6 h-80 grid bg-white rounded-lg shadow-md dark:bg-neutral-800 select-none')

})
