import { mdiFileCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCheckOutline} {...props} />;
}

export { mdiFileCheckOutline as path };
