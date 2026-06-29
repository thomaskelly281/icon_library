import { mdiMapOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapOutline(props: IconComponentProps) {
  return <Icon path={mdiMapOutline} {...props} />;
}

export { mdiMapOutline as path };
