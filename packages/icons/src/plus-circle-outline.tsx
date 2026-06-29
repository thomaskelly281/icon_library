import { mdiPlusCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusCircleOutline} {...props} />;
}

export { mdiPlusCircleOutline as path };
