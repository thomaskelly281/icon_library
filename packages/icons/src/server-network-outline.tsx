import { mdiServerNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiServerNetworkOutline} {...props} />;
}

export { mdiServerNetworkOutline as path };
