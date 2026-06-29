import { mdiAnimation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Animation(props: IconComponentProps) {
  return <Icon path={mdiAnimation} {...props} />;
}

export { mdiAnimation as path };
