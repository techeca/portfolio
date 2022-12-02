import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import MiHead from 'components/layout/MiHead'

  window.scrollTo = jest.fn()

  describe('Test Head', () => {
    let encabezado

    beforeEach(() => {
      encabezado = render(<MiHead />)
    })

    test('Render Head', () => {
      expect(encabezado.container).toHaveTextContent('Jim')
      expect(encabezado.container).toHaveTextContent('Contacto')
    })

    test('Menu desplegable', () => {
      const btnMenu = encabezado.getByText('Open main menu').parentNode //boton menu
      fireEvent.click(btnMenu)
      fireEvent.click(btnMenu)
  })

})
