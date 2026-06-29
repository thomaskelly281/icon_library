import { mdiHandHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiHandHeartOutline} {...props} />;
}

export { mdiHandHeartOutline as path };
