import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { Suspense } from 'react'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './context/Customization'

function App() {

  return (
    <CustomizationProvider>
      <div className='App'>
        <Canvas> 
          <Suspense fallback={null}>
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={10} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <Experience />
          </Suspense>
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>

  )
}

export default App
