import { mdiElevationDecline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevationDecline(props: IconComponentProps) {
  return <Icon path={mdiElevationDecline} {...props} />;
}

export { mdiElevationDecline as path };
