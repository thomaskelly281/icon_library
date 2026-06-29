import { mdiImageMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiImageMinusOutline} {...props} />;
}

export { mdiImageMinusOutline as path };
