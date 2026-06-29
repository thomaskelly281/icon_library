import { mdiMotherHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotherHeart(props: IconComponentProps) {
  return <Icon path={mdiMotherHeart} {...props} />;
}

export { mdiMotherHeart as path };
