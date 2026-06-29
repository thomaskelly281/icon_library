import { mdiCartHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartHeart(props: IconComponentProps) {
  return <Icon path={mdiCartHeart} {...props} />;
}

export { mdiCartHeart as path };
