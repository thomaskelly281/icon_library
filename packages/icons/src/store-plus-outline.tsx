import { mdiStorePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiStorePlusOutline} {...props} />;
}

export { mdiStorePlusOutline as path };
