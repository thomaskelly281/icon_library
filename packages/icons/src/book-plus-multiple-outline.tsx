import { mdiBookPlusMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlusMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiBookPlusMultipleOutline} {...props} />;
}

export { mdiBookPlusMultipleOutline as path };
