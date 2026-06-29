import { mdiCarWindshieldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarWindshieldOutline(props: IconComponentProps) {
  return <Icon path={mdiCarWindshieldOutline} {...props} />;
}

export { mdiCarWindshieldOutline as path };
