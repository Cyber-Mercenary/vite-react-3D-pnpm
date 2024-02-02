import {Canvas} from '@react-three/fiber'
import {Environment} from '@react-three/drei'
import Kotak from './components/Kotak'


const App = () => {

  return (
    <>
    <Canvas camera={{ position: [5, 5, 5], fov: 30  }}>
      <Kotak/>
      <Environment preset='sunset'/>
    </Canvas>
    </>
  )
}

export default App
