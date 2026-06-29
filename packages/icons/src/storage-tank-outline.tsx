import { mdiStorageTankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorageTankOutline(props: IconComponentProps) {
  return <Icon path={mdiStorageTankOutline} {...props} />;
}

export { mdiStorageTankOutline as path };
