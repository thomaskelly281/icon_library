import { mdiEjectCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EjectCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiEjectCircleOutline} {...props} />;
}

export { mdiEjectCircleOutline as path };
