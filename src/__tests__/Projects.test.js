import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import Projects from 'components/pages/Home/Projects'
import MyModal from 'components/common/MyModal'

  test('Render Projects', () => {
    const miProjects = render(<Projects />)
    const testCard = miProjects.getByText('PokeApp').parentNode
    //expect(miProjects.container).toHaveTextContent('No modal')
    
    fireEvent.click(testCard)
    fireEvent.click(testCard)

  })
