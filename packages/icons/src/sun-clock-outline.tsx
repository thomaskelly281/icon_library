import { mdiSunClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunClockOutline(props: IconComponentProps) {
  return <Icon path={mdiSunClockOutline} {...props} />;
}

export { mdiSunClockOutline as path };
