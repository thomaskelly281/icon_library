import { mdiWrenchClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchClockOutline(props: IconComponentProps) {
  return <Icon path={mdiWrenchClockOutline} {...props} />;
}

export { mdiWrenchClockOutline as path };
