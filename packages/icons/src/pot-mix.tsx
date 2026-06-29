import { mdiPotMix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PotMix(props: IconComponentProps) {
  return <Icon path={mdiPotMix} {...props} />;
}

export { mdiPotMix as path };
