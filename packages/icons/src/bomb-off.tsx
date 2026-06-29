import { mdiBombOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BombOff(props: IconComponentProps) {
  return <Icon path={mdiBombOff} {...props} />;
}

export { mdiBombOff as path };
