import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragmentShader.glsl'

const ShaderScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene, camera, and renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Geometry and ShaderMaterial
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
        });

        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);

        // Orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 5;

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            controls.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ShaderScene;
