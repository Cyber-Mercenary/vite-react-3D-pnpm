import { OrbitControls } from '@react-three/drei'

function Kotak() {
  return (
    <>
    <mesh>
        <OrbitControls/>
        <boxGeometry></boxGeometry>
        <meshNormalMaterial></meshNormalMaterial>
    </mesh>
    </>
  )
}

export default Kotak