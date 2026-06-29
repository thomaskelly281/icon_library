import { mdiImageOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageOff(props: IconComponentProps) {
  return <Icon path={mdiImageOff} {...props} />;
}

export { mdiImageOff as path };
