import { mdiFileTableOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTableOutline(props: IconComponentProps) {
  return <Icon path={mdiFileTableOutline} {...props} />;
}

export { mdiFileTableOutline as path };
