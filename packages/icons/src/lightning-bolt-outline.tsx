import { mdiLightningBoltOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightningBoltOutline(props: IconComponentProps) {
  return <Icon path={mdiLightningBoltOutline} {...props} />;
}

export { mdiLightningBoltOutline as path };
