import { mdiCloseNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseNetworkOutline} {...props} />;
}

export { mdiCloseNetworkOutline as path };
