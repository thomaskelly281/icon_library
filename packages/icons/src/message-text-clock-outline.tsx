import { mdiMessageTextClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextClockOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageTextClockOutline} {...props} />;
}

export { mdiMessageTextClockOutline as path };
