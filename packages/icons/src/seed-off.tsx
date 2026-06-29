import { mdiSeedOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeedOff(props: IconComponentProps) {
  return <Icon path={mdiSeedOff} {...props} />;
}

export { mdiSeedOff as path };
