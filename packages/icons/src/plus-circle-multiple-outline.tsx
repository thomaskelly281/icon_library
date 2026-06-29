import { mdiPlusCircleMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusCircleMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusCircleMultipleOutline} {...props} />;
}

export { mdiPlusCircleMultipleOutline as path };
