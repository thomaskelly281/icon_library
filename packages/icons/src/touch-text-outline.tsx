import { mdiTouchTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TouchTextOutline(props: IconComponentProps) {
  return <Icon path={mdiTouchTextOutline} {...props} />;
}

export { mdiTouchTextOutline as path };
