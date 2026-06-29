import { mdiImageCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiImageCheckOutline} {...props} />;
}

export { mdiImageCheckOutline as path };
