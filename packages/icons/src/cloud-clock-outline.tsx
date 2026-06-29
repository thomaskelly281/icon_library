import { mdiCloudClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudClockOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudClockOutline} {...props} />;
}

export { mdiCloudClockOutline as path };
