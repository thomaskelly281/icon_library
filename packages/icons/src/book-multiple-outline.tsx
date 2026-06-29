import { mdiBookMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiBookMultipleOutline} {...props} />;
}

export { mdiBookMultipleOutline as path };
