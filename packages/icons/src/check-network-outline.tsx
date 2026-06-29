import { mdiCheckNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckNetworkOutline} {...props} />;
}

export { mdiCheckNetworkOutline as path };
