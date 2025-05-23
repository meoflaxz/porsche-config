import { Grid, OrbitControls, PresentationControls, Stage} from "@react-three/drei";
import Porsche from "./Porsche";
// useGLTF.preload("/models/scene.gltf"); // Optional performance improvement

const Experience = () => {

    return (
        <PresentationControls
            global
            config={{ mass: 1, tension: 170 }}  // Softer spring
            // polar={[-0.4, 0.2]}
            // azimuth={[-1, 0.75]}
            >
            <Stage
                intensity={1}
                controls={false}
                adjustCamera={false}>
                <Porsche/>
                
                <Grid
                    args={[100, 500]} 
                    cellColor="gray"
                    sectionColor="white"
                    sectionThickness={1.5}
                    fadeDistance={30}
                    fadeStrength={1}
                    infiniteGrid={false}
                    position={[0, 0, 0]}
                    // rotation={[Math.PI / 2, 0, 0]}
                />
                {/* <OrbitControls></OrbitControls> */}
            </Stage>
        </PresentationControls>
    );
};

export default Experience;
