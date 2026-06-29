import { mdiTagHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagHeart(props: IconComponentProps) {
  return <Icon path={mdiTagHeart} {...props} />;
}

export { mdiTagHeart as path };
