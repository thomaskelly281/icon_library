import { mdiPencilBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilBoxOutline} {...props} />;
}

export { mdiPencilBoxOutline as path };
