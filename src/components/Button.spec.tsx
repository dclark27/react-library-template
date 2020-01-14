import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react'
import { Button } from './Button' 

test('shows the children of the button', () => {
  const testMessage = 'Test Message'
  render(<Button>{testMessage}</Button>)
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})