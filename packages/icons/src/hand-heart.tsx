import { mdiHandHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandHeart(props: IconComponentProps) {
  return <Icon path={mdiHandHeart} {...props} />;
}

export { mdiHandHeart as path };
