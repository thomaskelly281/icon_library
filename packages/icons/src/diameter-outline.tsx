import { mdiDiameterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiameterOutline(props: IconComponentProps) {
  return <Icon path={mdiDiameterOutline} {...props} />;
}

export { mdiDiameterOutline as path };
