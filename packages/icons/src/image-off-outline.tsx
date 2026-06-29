import { mdiImageOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageOffOutline(props: IconComponentProps) {
  return <Icon path={mdiImageOffOutline} {...props} />;
}

export { mdiImageOffOutline as path };
