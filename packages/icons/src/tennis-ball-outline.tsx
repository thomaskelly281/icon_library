import { mdiTennisBallOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TennisBallOutline(props: IconComponentProps) {
  return <Icon path={mdiTennisBallOutline} {...props} />;
}

export { mdiTennisBallOutline as path };
