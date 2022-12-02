import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import MyModal from 'components/common/MyModal'
import homePokeapp from 'images/homePokeapp.webp'
import regionPokeapp from 'images/regionPokeapp.webp'
import detailPokeapp from 'images/detail-pokeapp.webp'

test('Renderiza modal', () => {
  const mockHandler = jest.fn()
  const mockDataModal = {
    title:'PokeApp',
    description:<p className="font-light text-gray-500 dark:text-gray-400">WebApp realizada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span>, consume la API de <span className="font-bold text-yellow-400 dark:text-yellow-200">pokeapi</span> para mostrar las distintas regiones y detalles de cada Pokemon.</p>,
    urls: {demo:'https://techeca.github.io/Pokedex-ReactJS/', git:'https://github.com/techeca/Pokedex-ReactJS'},
    images:[detailPokeapp, homePokeapp, regionPokeapp],
    tools:['Javascript', 'React', 'MUI'],
    status: true
  }
  const modal = render(<MyModal modalHandler={mockHandler} data={mockDataModal} />)

  expect(modal.container).toHaveTextContent(mockDataModal.title)
  expect(modal.container).toHaveTextContent('Escanea el código QR para ver la Demo desde tu teléfono.')

  //check buttons
  const btnClose = modal.getByText('Close modal')
  fireEvent.click(btnClose)
  expect(screen.getByText('Ver Demo')).toBeInTheDocument()
  expect(screen.getByText('Github')).toBeInTheDocument()
  expect(mockHandler).toHaveBeenCalledTimes(1)

  //cambiar a seccion de imagenes
  const btnSectionImages = modal.getByText('Imagenes')
  fireEvent.click(btnSectionImages)

  //volver a detalles
  const btnSectionDetalles = modal.getByText('Detalles')
  fireEvent.click(btnSectionDetalles)

})

test('Renderiza modal con imagenes', async () => {
  const mockHandler = jest.fn()
  const mockDataModal = {
    title:'PokeApp',
    description:<p className="font-light text-gray-500 dark:text-gray-400">WebApp realizada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span>, consume la API de <span className="font-bold text-yellow-400 dark:text-yellow-200">pokeapi</span> para mostrar las distintas regiones y detalles de cada Pokemon.</p>,
    urls: {demo:'https://techeca.github.io/Pokedex-ReactJS/', git:'https://github.com/techeca/Pokedex-ReactJS'},
    images:[detailPokeapp, homePokeapp, regionPokeapp],
    tools:['Javascript', 'React', 'MUI'],
    status: true
  }
  const modal = render(<MyModal modalHandler={mockHandler} data={mockDataModal} />)

  //cambiar a seccion de imagenes
  const btnSectionImages = modal.getByText('Imagenes') //Imagenes
  fireEvent.click(btnSectionImages)
  //prev next btn imagenes
  await waitFor(() => {
    const btnPrev = modal.getByText('Previous')
    const btnNext = modal.getByText('Next')
    fireEvent.click(btnNext)
    fireEvent.click(btnPrev)
    fireEvent.click(btnPrev)
    fireEvent.click(btnNext)
  })
})

test('Renderiza modal sin imagenes', async () => {
  const mockHandler = jest.fn()
  const mockDataModal = {
    title:'PokeApp',
    description:<p className="font-light text-gray-500 dark:text-gray-400">WebApp realizada con <span className="font-bold text-cyan-500 dark:text-cyan-400">React</span>, consume la API de <span className="font-bold text-yellow-400 dark:text-yellow-200">pokeapi</span> para mostrar las distintas regiones y detalles de cada Pokemon.</p>,
    urls: {demo:'https://techeca.github.io/Pokedex-ReactJS/', git:'https://github.com/techeca/Pokedex-ReactJS'},
    images:[],
    tools:['Javascript', 'React', 'MUI'],
    status: true
  }
  const modal = render(<MyModal modalHandler={mockHandler} data={mockDataModal} />)

  //cambiar a seccion de imagenes
  const btnSectionImages = modal.getByText('Imagenes') //Imagenes
  fireEvent.click(btnSectionImages)
  //sin imagenes
  await waitFor(() => {
    expect(modal.getByText('No images'))
  })

})
