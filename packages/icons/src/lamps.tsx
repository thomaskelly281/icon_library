import { mdiLamps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lamps(props: IconComponentProps) {
  return <Icon path={mdiLamps} {...props} />;
}

export { mdiLamps as path };
