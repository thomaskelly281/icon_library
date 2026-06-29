import { mdiPencilOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilOutline} {...props} />;
}

export { mdiPencilOutline as path };
