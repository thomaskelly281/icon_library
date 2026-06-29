import { mdiHammerSickle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HammerSickle(props: IconComponentProps) {
  return <Icon path={mdiHammerSickle} {...props} />;
}

export { mdiHammerSickle as path };
