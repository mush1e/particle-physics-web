export type Vec2 = {
    x: number;
    y: number;
};

export const vec2 = {
    create(x = 0, y = 0): Vec2 {
        return {x, y};
    },

    add(v1: Vec2, v2: Vec2 ): Vec2 {
        return {x: v1.x + v2.x, y: v1.y + v2.y};
    },

    sub(v1: Vec2, v2: Vec2): Vec2 {
        return {x: v1.x - v2.x, y: v1.y - v2.y};
    },

    scale(v: Vec2, s: number): Vec2 {
        return {x: v.x * s, y: v.y * s};
    }, 

    dot(v1: Vec2, v2: Vec2): number {
        return v1.x * v2.x + v1.y * v2.y;
    },

    length(v: Vec2): number {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    },

    lengthSq(v: Vec2): number {
        return v.x * v.x + v.y * v.y;
    },

  normalize(v: Vec2): Vec2 {
    const len = vec2.length(v);
    return len > 0 ? vec2.scale(v, 1 / len) : { x: 0, y: 0 };
  },

  distance(v1: Vec2, v2: Vec2): number {
    return vec2.length(vec2.sub(v1, v2));
  },

  distanceSq(v1: Vec2, v2: Vec2): number {
    return vec2.lengthSq(vec2.sub(v1, v2));
  },

  // Mutable versions for hot paths (avoid allocation)
  addMut(out: Vec2, v1: Vec2, v2: Vec2): Vec2 {
    out.x = v1.x + v2.x;
    out.y = v1.y + v2.y;
    return out;
  },

  scaleMut(out: Vec2, v: Vec2, s: number): Vec2 {
    out.x = v.x * s;
    out.y = v.y * s;
    return out;
  }

}