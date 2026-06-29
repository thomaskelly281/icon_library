import { mdiMapSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiMapSearchOutline} {...props} />;
}

export { mdiMapSearchOutline as path };
