import { mdiHelpNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiHelpNetworkOutline} {...props} />;
}

export { mdiHelpNetworkOutline as path };
