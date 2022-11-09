import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Html, useProgress} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense,useState,useEffect } from "react";
import { Vector3 } from "three";
import * as THREE from 'three';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

let size = [];

const teleportState = () =>{
  return newPosition = new THREE.Vector3 ( 0, 0, 1); 
};

const Model = () => {
  let gltf2 = useLoader(GLTFLoader, "./scene.gltf");
  const primitive = <primitive onPointerOut={(e) => console.log( 'onHoverIn object name=>',e.object.name,"state position=>",e.object.position.z = 0 , "full event =>",e)} onPointerOver={(e) => console.log( 'onHoverIn object name=>',e.object.name,"state position=>",e.object.position.z = 0.2 , "full event =>",e)}  scale={1} object={gltf2.scene} />;
  //const primitive = <primitive onPointerOver={(e) => e.object.position = new THREE.Vector3 ( 0, 0, 1) }  scale={1} object={gltf2.scene} />;
  primitive.props.object.traverse( (child) =>{
    //console.log(child);
  })
  return primitive;
};

export default function App() {
  return (
    <div className="App">
      <h1>Test size {size.length} </h1>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model scale={1} />
          <OrbitControls minDistance={1}  maxPolarAngle={Math.PI / 2} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
