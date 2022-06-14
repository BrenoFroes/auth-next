/**
* @jest-environment jsdom
*/

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './index'

it('should render Login', () => {
  const { container  } = render(<Login />)
  expect(container.querySelector('.container')).toBeInTheDocument()
})