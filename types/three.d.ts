declare module 'three' {
  export * from 'three/src/Three';
  
  // Add missing types
  export class Mesh {
    rotation: { x: number; y: number; z: number };
  }
  
  export class Points {
    rotation: { x: number; y: number; z: number };
  }
  
  // Define blending modes
  export const AdditiveBlending: number;
} 