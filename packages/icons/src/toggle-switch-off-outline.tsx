import { mdiToggleSwitchOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitchOffOutline(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitchOffOutline} {...props} />;
}

export { mdiToggleSwitchOffOutline as path };
