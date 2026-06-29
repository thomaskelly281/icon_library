import { mdiPencilOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilOffOutline} {...props} />;
}

export { mdiPencilOffOutline as path };
