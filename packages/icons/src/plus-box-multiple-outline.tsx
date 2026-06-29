import { mdiPlusBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusBoxMultipleOutline} {...props} />;
}

export { mdiPlusBoxMultipleOutline as path };
