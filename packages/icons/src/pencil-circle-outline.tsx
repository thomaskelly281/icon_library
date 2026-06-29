import { mdiPencilCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilCircleOutline} {...props} />;
}

export { mdiPencilCircleOutline as path };
