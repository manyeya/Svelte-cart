import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { TransitionConfig } from "svelte/types/runtime/transition";

gsap.registerPlugin(ScrollTrigger);

export function animate(
  node: Element,
  { el: el, type, ...args }: GSAPTweenVars
) {
  el != null ? gsap[type](el, args) : gsap[type](node, args);
}

export function transition(
  node: Element,
  { type, ...args }: GSAPTweenVars
): TransitionConfig {
  return { css: () => gsap[type](node, args) };
}
