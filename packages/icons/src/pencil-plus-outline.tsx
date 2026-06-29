import { mdiPencilPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilPlusOutline} {...props} />;
}

export { mdiPencilPlusOutline as path };
