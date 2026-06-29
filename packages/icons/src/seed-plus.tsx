import { mdiSeedPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeedPlus(props: IconComponentProps) {
  return <Icon path={mdiSeedPlus} {...props} />;
}

export { mdiSeedPlus as path };
