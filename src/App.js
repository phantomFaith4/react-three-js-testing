import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Html, useProgress} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense,useState,useEffect } from "react";


function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}


let size = [];

const Model = () => {
  let gltf2 = useLoader(GLTFLoader, "./scene.gltf");
  const primitive = <primitive onPointerOver={(e) => console.log('onHoverIn=>',e)}  scale={1} object={gltf2.scene} />;
  //console.log("primitive children=>", primitive.props.object.children[0].children[0].children);
  primitive.props.object.traverse( (child) =>{
    //console.log(child);
    //size.push(child.name);
    //return <primitive onPointerOver={(e) => console.log('onHoverIn',child.name)}  scale={1} object={child} />
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
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
