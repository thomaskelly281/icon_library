import { mdiMapClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapClockOutline(props: IconComponentProps) {
  return <Icon path={mdiMapClockOutline} {...props} />;
}

export { mdiMapClockOutline as path };
