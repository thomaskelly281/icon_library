import { mdiMinusNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiMinusNetworkOutline} {...props} />;
}

export { mdiMinusNetworkOutline as path };
