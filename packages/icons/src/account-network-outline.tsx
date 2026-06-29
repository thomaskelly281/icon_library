import { mdiAccountNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountNetworkOutline} {...props} />;
}

export { mdiAccountNetworkOutline as path };
