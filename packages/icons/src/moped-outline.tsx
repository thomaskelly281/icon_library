import { mdiMopedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MopedOutline(props: IconComponentProps) {
  return <Icon path={mdiMopedOutline} {...props} />;
}

export { mdiMopedOutline as path };
