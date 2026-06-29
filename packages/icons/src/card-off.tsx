import { mdiCardOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardOff(props: IconComponentProps) {
  return <Icon path={mdiCardOff} {...props} />;
}

export { mdiCardOff as path };
