import React from 'react'

import jagg from '../assets/3d/jagernaut_beyond_human.glb'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
export function Jager(){
    const {scene , animations} = useGLTF(jagg)
    const jag = useRef()
    useFrame((_, delta) => {
      jag.current.rotation.y += 0.25 * delta;
    });
   
  return (
    <mesh ref={jag} position={[0, -2, 0]} scale={[0.2, 0.2, 0.2]}>
        <primitive object={scene} />
    </mesh>
  )
}
