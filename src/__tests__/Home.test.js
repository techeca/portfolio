import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import Home from 'components/pages/Home'

window.scrollTo = jest.fn()

test('Render Home', () => {
  const miHome = render(<Home />)
  const divider = screen.getByTitle('divider')

  expect(miHome.container).toHaveTextContent('Jim')
  expect(miHome.container).toHaveTextContent('Portfolio')
  expect(screen.getByTitle('divider'))
  expect(miHome.container).toHaveTextContent('Puedes utilizar el siguiente formulario para comunicarte conmigo.')
  expect(miHome.container).toHaveTextContent('© 2022 Creado por')
})
