import { mdiFileMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiFileMultipleOutline} {...props} />;
}

export { mdiFileMultipleOutline as path };
