import { mdiCloudClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudClock(props: IconComponentProps) {
  return <Icon path={mdiCloudClock} {...props} />;
}

export { mdiCloudClock as path };
