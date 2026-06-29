import { mdiAccountHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountHeartOutline} {...props} />;
}

export { mdiAccountHeartOutline as path };
