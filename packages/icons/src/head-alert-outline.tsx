import { mdiHeadAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadAlertOutline} {...props} />;
}

export { mdiHeadAlertOutline as path };
