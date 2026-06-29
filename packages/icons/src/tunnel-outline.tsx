import { mdiTunnelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TunnelOutline(props: IconComponentProps) {
  return <Icon path={mdiTunnelOutline} {...props} />;
}

export { mdiTunnelOutline as path };
