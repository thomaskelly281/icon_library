import { mdiPencilRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilRemoveOutline} {...props} />;
}

export { mdiPencilRemoveOutline as path };
