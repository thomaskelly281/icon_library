import { mdiGamepad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gamepad(props: IconComponentProps) {
  return <Icon path={mdiGamepad} {...props} />;
}

export { mdiGamepad as path };
