import { mdiPencilMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilMinusOutline} {...props} />;
}

export { mdiPencilMinusOutline as path };
