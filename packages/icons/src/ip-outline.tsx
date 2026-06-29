import { mdiIpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IpOutline(props: IconComponentProps) {
  return <Icon path={mdiIpOutline} {...props} />;
}

export { mdiIpOutline as path };
