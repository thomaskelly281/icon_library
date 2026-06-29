import { mdiSubmarine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Submarine(props: IconComponentProps) {
  return <Icon path={mdiSubmarine} {...props} />;
}

export { mdiSubmarine as path };
