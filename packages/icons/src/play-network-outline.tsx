import { mdiPlayNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiPlayNetworkOutline} {...props} />;
}

export { mdiPlayNetworkOutline as path };
