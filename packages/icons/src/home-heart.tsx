import { mdiHomeHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeHeart(props: IconComponentProps) {
  return <Icon path={mdiHomeHeart} {...props} />;
}

export { mdiHomeHeart as path };
