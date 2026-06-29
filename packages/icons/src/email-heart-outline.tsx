import { mdiEmailHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailHeartOutline} {...props} />;
}

export { mdiEmailHeartOutline as path };
