import { mdiPencilRulerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilRulerOutline(props: IconComponentProps) {
  return <Icon path={mdiPencilRulerOutline} {...props} />;
}

export { mdiPencilRulerOutline as path };
