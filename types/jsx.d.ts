import { Object3D, MeshStandardMaterial } from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Basic Three.js elements
      mesh: any;
      group: any;
      
      // Lights
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      directionalLight: any;
      
      // Geometries
      boxGeometry: any;
      sphereGeometry: any;
      planeGeometry: any;
      torusGeometry: any;
      torusKnotGeometry: any;
      dodecahedronGeometry: any;
      
      // Materials
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      meshPhongMaterial: any;
      meshNormalMaterial: any;
      
      // Other elements
      primitive: any;
      line: any;
      lineSegments: any;
      points: any;
    }
  }
} 