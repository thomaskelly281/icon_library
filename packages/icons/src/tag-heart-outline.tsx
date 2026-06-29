import { mdiTagHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiTagHeartOutline} {...props} />;
}

export { mdiTagHeartOutline as path };
