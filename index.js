import * as THREE from './three.js/build/three.module.js';
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three.js/examples/jsm/loaders/GLTFLoader.js';

// init scene
const ASPECT = window.innerWidth / window.innerHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);
const camera = new THREE.PerspectiveCamera(75, ASPECT, 1, 1000);
camera.position.set(0, 50, 200);
camera.lookAt(0, 0, 0);

// set renderer
const renderer = new THREE.WebGLRenderer();
let control = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let dirLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(dirLight);

function createTable() {
  let table = null;
  const loader = new GLTFLoader();
  const load3Dmodel = (path) => {
    {
      let loader = new GLTFLoader();
      //promise
      return loader.loadAsync(path);
    }
  };

  load3Dmodel('./src/wooden_table/scene.gltf').then((object) => {
    table = object.scene;
    table.scale.set(150, 150, 150);
    table.position.set(80, -75, 0);
    table.rotation.set(0, 1.55, 0);

    scene.add(table);
  });
}

//--------------------------Puzzel 1------------------------------
function createFloor() {
  let blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry(120, 2, 120), new THREE.MeshPhongMaterial({ color: 0xf9c834 }));
  blockPlane.position.set(0, -1, 0);
  scene.add(blockPlane);

  blockPlane.userData.ground = true;
}

function createBox() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/1.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(-20, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBox2() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/2.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(0, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBox3() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/3.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(20, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox4() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/6.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(-20, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox5() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/4.jpg');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(0, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox6() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/5.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(20, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox7() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/7.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(-20, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox8() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/9.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(0, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBox9() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle1/8.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));

  box.position.set(20, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

// ------------------------ Puzzel 2 --------------------------------------

function createFloor2() {
  let blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry(120, 2, 120), new THREE.MeshPhongMaterial({ color: 0xf00000 }));
  blockPlane.position.set(160, -1, 0);
  scene.add(blockPlane);

  blockPlane.userData.ground = true;
}

function createBoxA() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/b.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(130, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxB() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/a.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(150, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxC() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/j.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(170, 2, -20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBoxD() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/g.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(190, 2, -20); //-20, 2, 0
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBoxE() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/c.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(130, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBoxF() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/k.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(150, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBoxG() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/i.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(170, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}
function createBoxH() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/l.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));
  box.position.set(190, 2, 0);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxI() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/d.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));

  box.position.set(130, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxJ() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/f.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));

  box.position.set(150, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxK() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/e.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));

  box.position.set(170, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

function createBoxL() {
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./src/puzzle2/h.png');

  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(20, 5, 20), new THREE.MeshPhongMaterial({ map: texture }));

  box.position.set(190, 2, 20);
  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = 'BOX';
}

//---------------------------------------------

const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();
const moveMouse = new THREE.Vector2();
var draggable = new THREE.Object3D();

window.addEventListener('click', (event) => {
  if (draggable != null) {
    console.log(`dropping draggable ${draggable.userData.name}`);
    draggable = null;
    return;
  }

  // THREE RAYCASTER
  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(clickMouse, camera);
  const found = raycaster.intersectObjects(scene.children);
  if (found.length > 0 && found[0].object.userData.draggable) {
    draggable = found[0].object;
    console.log(`found object ${draggable.userData.name}`);
  }
});

window.addEventListener('mousemove', (event) => {
  moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  moveMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

function dragObject() {
  if (draggable != null) {
    raycaster.setFromCamera(moveMouse, camera);
    const found = raycaster.intersectObjects(scene.children);
    if (found.length > 0) {
      for (let o of found) {
        if (o.object.userData.ground) continue;

        draggable.position.x = o.point.x;
        draggable.position.z = o.point.z;
      }
    }
  }
}

const animete = () => {
  dragObject();
  renderer.render(scene, camera);
  requestAnimationFrame(animete);
};

window.onload = function () {
  createTable();

  //-- Puzzle 1
  createFloor();
  createBox();
  createBox2();
  createBox3();
  createBox4();
  createBox5();
  createBox6();
  createBox7();
  createBox8();
  createBox9();

  //-- Puzzle 1
  createFloor2();
  createBoxA();
  createBoxB();
  createBoxC();
  createBoxD();
  createBoxE();
  createBoxF();
  createBoxG();
  createBoxH();
  createBoxI();
  createBoxJ();
  createBoxK();
  createBoxL();

  animete();
};
