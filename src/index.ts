import { engine, Material, MeshCollider, MeshRenderer, Transform } from '@dcl/sdk/ecs';
import { Color4, Vector3 } from '@dcl/sdk/math';

export function main() {
    const sphere = engine.addEntity();
    Transform.create(sphere, { position: Vector3.create(8., 2., 8.) });
    MeshRenderer.setSphere(sphere);
    MeshCollider.setSphere(sphere);
    Material.setPbrMaterial(sphere, { albedoColor: Color4.create(0., 0., 1., 1.) });
}