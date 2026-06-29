import { mdiHomeClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeClockOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeClockOutline} {...props} />;
}

export { mdiHomeClockOutline as path };
