import { mdiServerPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiServerPlusOutline} {...props} />;
}

export { mdiServerPlusOutline as path };
