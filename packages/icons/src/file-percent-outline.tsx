import { mdiFilePercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePercentOutline(props: IconComponentProps) {
  return <Icon path={mdiFilePercentOutline} {...props} />;
}

export { mdiFilePercentOutline as path };
