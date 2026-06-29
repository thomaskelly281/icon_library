import { mdiSendClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendClockOutline(props: IconComponentProps) {
  return <Icon path={mdiSendClockOutline} {...props} />;
}

export { mdiSendClockOutline as path };
