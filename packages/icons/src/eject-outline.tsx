import { mdiEjectOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EjectOutline(props: IconComponentProps) {
  return <Icon path={mdiEjectOutline} {...props} />;
}

export { mdiEjectOutline as path };
