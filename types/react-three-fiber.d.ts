declare module '@react-three/fiber' {
  export * from '@react-three/fiber/dist/declarations';
}

declare module '@react-three/drei' {
  export * from '@react-three/drei/core';
}

declare namespace JSX {
  interface IntrinsicElements {
    ambientLight: any;
    mesh: any;
    boxGeometry: any;
    spotLight: any;
    directionalLight: any;
    meshStandardMaterial: any;
    torusGeometry: any;
    torusKnotGeometry: any;
    dodecahedronGeometry: any;
    group: any;
    points: any;
  }
} 