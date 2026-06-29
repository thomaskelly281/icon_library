import { mdiAnimationPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AnimationPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiAnimationPlayOutline} {...props} />;
}

export { mdiAnimationPlayOutline as path };
