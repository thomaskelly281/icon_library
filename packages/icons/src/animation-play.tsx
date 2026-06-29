import { mdiAnimationPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AnimationPlay(props: IconComponentProps) {
  return <Icon path={mdiAnimationPlay} {...props} />;
}

export { mdiAnimationPlay as path };
