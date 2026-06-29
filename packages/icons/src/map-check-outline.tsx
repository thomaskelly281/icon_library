import { mdiMapCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiMapCheckOutline} {...props} />;
}

export { mdiMapCheckOutline as path };
