import { mdiFileTableBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTableBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiFileTableBoxOutline} {...props} />;
}

export { mdiFileTableBoxOutline as path };
