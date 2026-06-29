import { mdiHeadHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadHeartOutline} {...props} />;
}

export { mdiHeadHeartOutline as path };
