import { mdiAnimationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AnimationOutline(props: IconComponentProps) {
  return <Icon path={mdiAnimationOutline} {...props} />;
}

export { mdiAnimationOutline as path };
