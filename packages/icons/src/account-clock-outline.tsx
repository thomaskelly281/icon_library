import { mdiAccountClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountClockOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountClockOutline} {...props} />;
}

export { mdiAccountClockOutline as path };
