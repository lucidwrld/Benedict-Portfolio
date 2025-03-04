import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/multi_universe_space_ship_3d_model.glb";

export function SpaceShip() {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the spaceship
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    
    actions
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the spaceship reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate it 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the spaceship's rotation
      birdRef.current.rotation.y = 90;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 90) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  }); 

  return (
    // to create and display 3D objects
    <mesh ref={birdRef}  position={[-4, 2, 1]} scale={[0.2, 0.2, 0.2]}>
      <primitive object={scene} />
    </mesh>
  );
}
