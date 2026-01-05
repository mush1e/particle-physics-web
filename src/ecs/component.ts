import { Vec2 } from "../engine/math"

export type Transform = {
    position: Vec2,
    prevPosition: Vec2
}

export type RigidBody = {
    velocity: Vec2,
    mass: number,
    restitution: number,
    drag: number
}

export type CircleCollider = {
    radius: number
}

export type Sprite = {
    color: string,
    alpha: number
}

export type Lifetime = {
    remainingSeconds: number,
    totalSeconds: number
}

export type ComponentRegistry = {
    transform: Transform,
    rigidBody: RigidBody,
    circleCollider: CircleCollider,
    sprite: Sprite,
    lifetime: Lifetime
}

export type ComponentKeys = keyof ComponentRegistry