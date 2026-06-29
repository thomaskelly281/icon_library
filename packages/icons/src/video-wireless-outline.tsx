import { mdiVideoWirelessOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoWirelessOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoWirelessOutline} {...props} />;
}

export { mdiVideoWirelessOutline as path };
