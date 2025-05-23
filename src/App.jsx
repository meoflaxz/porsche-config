import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <div className='App'>
        <Canvas> 
          <Suspense fallback={null}>
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={10} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <Experience />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default App
