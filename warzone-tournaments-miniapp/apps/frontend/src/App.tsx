import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-8">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          
          <h1 className="text-4xl font-bold text-center">Vite + React</h1>
          
          <div className="card bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p className="mt-4 text-muted-foreground">
              Edit <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="read-the-docs text-muted-foreground text-center">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
