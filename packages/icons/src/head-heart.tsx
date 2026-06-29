import { mdiHeadHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadHeart(props: IconComponentProps) {
  return <Icon path={mdiHeadHeart} {...props} />;
}

export { mdiHeadHeart as path };
