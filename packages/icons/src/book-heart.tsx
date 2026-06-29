import { mdiBookHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookHeart(props: IconComponentProps) {
  return <Icon path={mdiBookHeart} {...props} />;
}

export { mdiBookHeart as path };
