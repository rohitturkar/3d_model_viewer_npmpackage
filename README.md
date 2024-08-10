# 3dmodelviewinreact

### A Simple and Efficient 3D Model Viewer for React Applications

**3dmodelviewinreact** is a lightweight React package designed to simplify the process of rendering 3D models on your website. With just a single line of code, you can display and interact with .glb and .gltf models, eliminating the need to manually set up Three.js and other complex configurations.

## Features

- **Easy Integration**: Quickly integrate 3D model viewing capabilities into your React application with minimal code.
- **Configurable**: Easily control rotation and zoom functionalities with simple props.
- **Supports GLTF and GLB**: The package currently supports `.glb` and `.gltf` formats, with plans for future expansion.

## Installation

To get started, install the package via npm:

npm i 


Usage
After installation, you can use the ModelViewer component to display a 3D model in your React application. Here’s a basic example:


```

**import React from 'react';
import ModelViewer from '3dmodelviewinreact';

const My3DModelComponent = () => {
  return (
    <ModelViewer 
      modelLink="model/car.glb" 
      width={200} 
      height={200} 
      enableRotation={false} 
      enableZoom={false} 
    />
  );
};

export default My3DModelComponent;**

```


Props

`modelLink`: (string, required) The URL or path to the .glb or .gltf model you want to display.
`width`: (number, optional) The width of the canvas in pixels. Default is 150.
`height`: (number, optional) The height of the canvas in pixels. Default is 150.
`enableRotation`: (boolean, optional) Enable or disable the ability to rotate the model. Default is true.
`enableZoom`: (boolean, optional) Enable or disable the ability to zoom into the model. Default is true.


### Example Use Cases

Displaying a 3D Model Thumbnail
If you need to display a 3D model as a thumbnail without user interaction, you can disable rotation and zoom:

```

**<ModelViewer 
  modelLink="model/car.glb" 
  width={100} 
  height={100} 
  enableRotation={false} 
  enableZoom={false} 
/>**
```

Interactive 3D Model Display
For a more interactive experience where users can rotate and zoom into the model:
```
**<ModelViewer 
  modelLink="model/robot.glb" 
  width={300} 
  height={300} 
  enableRotation={true} 
  enableZoom={true} 
/>**
```

Why Use **3dmodelviewinreact**

`Simplicity`: No need to write extensive Three.js code or handle complex setups.
`Flexibility`: Customize how your 3D models are displayed with just a few props.
`Focus`: Designed specifically for React developers who want to integrate 3D models effortlessly.


Future Plans

Support for additional 3D model formats.
Enhanced controls and additional customization options.
Improved performance optimizations.