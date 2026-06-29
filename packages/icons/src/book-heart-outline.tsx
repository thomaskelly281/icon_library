import { mdiBookHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiBookHeartOutline} {...props} />;
}

export { mdiBookHeartOutline as path };
