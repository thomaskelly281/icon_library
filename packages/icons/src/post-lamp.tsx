import { mdiPostLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PostLamp(props: IconComponentProps) {
  return <Icon path={mdiPostLamp} {...props} />;
}

export { mdiPostLamp as path };
