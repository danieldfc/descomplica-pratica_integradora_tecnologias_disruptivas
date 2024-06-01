import { render, screen } from '@testing-library/react'
import App from './App'

test('render "Gerenciamento de Projetos"', () => {
  render(<App />)
  const linkElement = screen.getByText(/Gerenciamento de Projetos/i)
  expect(linkElement).toBeInTheDocument()
})
