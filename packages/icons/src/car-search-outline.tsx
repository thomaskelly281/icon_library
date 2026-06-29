import { mdiCarSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCarSearchOutline} {...props} />;
}

export { mdiCarSearchOutline as path };
