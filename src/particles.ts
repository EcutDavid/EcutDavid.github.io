declare function require(name: string);
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
const PlaneOBJ = require('./models/plane.obj');
import textToPoints from './textToPoints.ts';

OBJLoader(THREE);
const loader: THREE.OBJLoader = new THREE.OBJLoader();

function mobilecheck() {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}
const isMobile = mobilecheck();


const maxSpeed = 12;
class Plane {
  private speedX = 0;
  private speedY = 0;
  private rotateX = 0.05 * Math.random() + 0.01;
  private rotateY = 0.05 * Math.random() + 0.01;
  private mesh: THREE.Group;

  constructor(srcGroup: THREE.Group, private posX: number, private posY: number, rendererWidth: number) {
    this.mesh = srcGroup.clone();

    this.mesh.rotateX(Math.PI * 2 * Math.random());
    this.mesh.rotateY(Math.PI * 2 * Math.random());
    // 400 -> 1.5, 800 -> 1.1
    this.mesh.scale.divideScalar(-0.0007 * rendererWidth + 1.9);

    this.mesh.scale.multiplyScalar(1 + Math.random());

    this.mesh.position.x = (Math.random() - 0.5) * visibleWidth;
    this.mesh.position.y = (Math.random() - 0.5) * visibleHeight;

    this.mesh.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({ color: 0x2199e8, side: THREE.DoubleSide });
      }
    });
    scene.add(this.mesh);
  }

  setPos(x: number, y: number) {
    this.mesh.position.x = x;
    this.mesh.position.y = y;
  }

  update(mouseX: number, mouseY: number) {
    const { x, y } = this.mesh.position;
    this.speedX = (this.posX - x) / visibleWidth * maxSpeed;
    this.speedX = Math.min(this.speedX, maxSpeed);
    this.speedY = (this.posY - y) / visibleHeight * maxSpeed;
    this.speedY = Math.min(this.speedY, maxSpeed);

    if (!isMobile) {
      const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
      if (distance < 20) {
        const accX = (mouseX - x) / 3;
        this.speedX -= accX;

        const accY = (mouseY - y) / 3;
        this.speedY -= accY;
      }
    }

    this.mesh.position.x += this.speedX;
    this.mesh.rotateX(this.rotateX);
    this.mesh.rotateY(this.rotateY);
    this.mesh.position.y += this.speedY;
  }

  destroy() {
    scene.remove(this.mesh);
  }
}

let planes: Plane[] = [];
let planeTHREEGroup: THREE.Group;

const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0xFFFFFF));
const light = new THREE.DirectionalLight(0xffffff, .9);
light.position.set(200, 200, 5);
scene.add(light);
const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.9);
scene.add(hemisphereLight);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

document.addEventListener('mousemove', onDocumentMouseMove);
let rayX = 99999;
let rayY = 99999;
function onDocumentMouseMove(evt: MouseEvent) {
  rayX = (evt.clientX - renderer.domElement.offsetLeft) * displayRatio - visibleWidth / 2;
  rayY = -((evt.clientY - renderer.domElement.offsetTop) * displayRatio - visibleHeight / 2);
}

const drawText = (text: string, left: number, right: number, top: number) => {
  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = Number.MIN_VALUE;
  let maxY = Number.MIN_VALUE;

  const points = textToPoints(text);

  const process = (x: number, y: number) => {
    const plane = new Plane(planeTHREEGroup, x, y, renderWidth);
    planes.push(plane);
  };

  points.forEach(d => {
    if (d[0] < minX) minX = d[0];
    if (d[1] < minY) minY = d[1];
    if (d[0] > maxX) maxX = d[0];
    if (d[1] > maxY) maxY = d[1];
  });
  const scale = (right - left) / (maxX - minX);
  let pointer = 0;
  const renderPoints = () => {
    const boundary = Math.min(pointer + 100, points.length);
    for (; pointer < boundary; pointer++) {
      const [x, y] = points[pointer];
      process(left + x * scale, top - y * scale);
    }
    if(pointer < points.length) {
      setTimeout(renderPoints, 0);
    }
  }
  renderPoints();
};

const distanceFromCamera = 100;
let renderWidth = window.innerWidth;
let renderHeight = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);
camera.position.z = distanceFromCamera;
let visibleHeight = 2 * Math.tan((Math.PI / 180) * camera.fov / 2) * distanceFromCamera;
let visibleWidth = visibleHeight * renderWidth / renderHeight;
let displayRatio = visibleHeight / renderHeight;

function rebuildParticles() {
  renderWidth = (document.querySelector(targetSelector) as HTMLElement).offsetWidth;
  renderWidth = Math.min(1200, renderWidth);
  renderHeight = (document.querySelector(targetSelector) as HTMLElement).offsetHeight;
  renderer.setSize(renderWidth, renderHeight);
  camera.aspect = renderWidth / renderHeight;
  camera.updateProjectionMatrix();

  visibleHeight = 2 * Math.tan((Math.PI / 180) * camera.fov / 2) * distanceFromCamera;
  visibleWidth = visibleHeight * renderWidth / renderHeight;
  displayRatio = visibleHeight / renderHeight;

  if (planes.length) {
    planes.forEach(d => d.destroy());
    planes = [];
  }
  drawText('David Guan', -visibleWidth / 2.6, visibleWidth / 2.6, visibleHeight / 2 - 15);
  drawText('Software Engineer', -visibleWidth / 2.5, visibleWidth / 2.5, -5);
}

let isOnDebounce = false;
function reset() {
  if (!isOnDebounce) {
    isOnDebounce = true;

    setTimeout(() => {
      isOnDebounce = false;
      rebuildParticles();
    }, 1500);
  }
}


function renderingLoop() {
  renderer.render(scene, camera);
  requestAnimationFrame(renderingLoop);

  planes.forEach(d => d.update(rayX, rayY));
}

let targetSelector: string;
export default function render(selector) {
  targetSelector = selector;
  window.addEventListener('resize', reset);
  document.querySelector(selector).appendChild(renderer.domElement);
  loader.load(
    PlaneOBJ, object => {
      planeTHREEGroup = object;
      rebuildParticles();
    },
  );
  renderingLoop();
}
