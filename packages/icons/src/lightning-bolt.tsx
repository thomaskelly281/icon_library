import { mdiLightningBolt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightningBolt(props: IconComponentProps) {
  return <Icon path={mdiLightningBolt} {...props} />;
}

export { mdiLightningBolt as path };
