import { mdiMowerOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MowerOn(props: IconComponentProps) {
  return <Icon path={mdiMowerOn} {...props} />;
}

export { mdiMowerOn as path };
