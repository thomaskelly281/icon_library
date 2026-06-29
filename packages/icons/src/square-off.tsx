import { mdiSquareOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareOff(props: IconComponentProps) {
  return <Icon path={mdiSquareOff} {...props} />;
}

export { mdiSquareOff as path };
