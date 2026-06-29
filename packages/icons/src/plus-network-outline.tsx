import { mdiPlusNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusNetworkOutline} {...props} />;
}

export { mdiPlusNetworkOutline as path };
