import { mdiPencilBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilBoxMultipleOutline} {...props} />;
}

export { mdiPencilBoxMultipleOutline as path };
