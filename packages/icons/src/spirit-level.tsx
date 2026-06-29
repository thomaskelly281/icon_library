import { mdiSpiritLevel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpiritLevel(props: IconComponentProps) {
  return <Icon path={mdiSpiritLevel} {...props} />;
}

export { mdiSpiritLevel as path };
