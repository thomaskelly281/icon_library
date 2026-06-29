import { mdiHubOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HubOutline(props: IconComponentProps) {
  return <Icon path={mdiHubOutline} {...props} />;
}

export { mdiHubOutline as path };
