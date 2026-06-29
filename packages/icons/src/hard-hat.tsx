import { mdiHardHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HardHat(props: IconComponentProps) {
  return <Icon path={mdiHardHat} {...props} />;
}

export { mdiHardHat as path };
