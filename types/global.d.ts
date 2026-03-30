import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      spotLight: any;
      directionalLight: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      torusGeometry: any;
      dodecahedronGeometry: any;
      torusKnotGeometry: any;
      group: any;
      points: any;
    }
  }
} 