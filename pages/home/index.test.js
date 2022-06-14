/**
* @jest-environment jsdom
*/

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('should render Home', () => {
  const { container  } = render('Cadastre-se')
  expect(container).toBeInTheDocument()
})