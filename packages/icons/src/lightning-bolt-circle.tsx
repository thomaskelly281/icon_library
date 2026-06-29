import { mdiLightningBoltCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightningBoltCircle(props: IconComponentProps) {
  return <Icon path={mdiLightningBoltCircle} {...props} />;
}

export { mdiLightningBoltCircle as path };
