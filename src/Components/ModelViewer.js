
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";

const ModelViewer = ({ modelLink, enableRotation = true, enableZoom = true, width = "100%", height = "100%" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (WebGL.isWebGLAvailable()) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      mountRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5).normalize();
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      let model;

      const loadModel = async () => {
        try {
          const gltf = await new Promise((resolve, reject) => {
            loader.load(modelLink, resolve, undefined, reject);
          });
          model = gltf.scene;
          model.scale.set(3, 3, 3);
          scene.add(model);
        } catch (error) {
          console.error("An error occurred while loading the model", error);
        }
      };

      loadModel();

      camera.position.z = 5;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = enableZoom;

      const animate = () => {
        if (model && enableRotation) {
          model.rotation.y += 0.05;
         
        }
        controls.update();
          renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);

      return () => {
        renderer.setAnimationLoop(null);
        mountRef?.current?.removeChild(renderer?.domElement);
      };
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      mountRef.current.appendChild(warning);
    }
  }, [modelLink, enableRotation, enableZoom]);

  return <div ref={mountRef} style={{ width, height }} ></div>;
};

export default ModelViewer;
