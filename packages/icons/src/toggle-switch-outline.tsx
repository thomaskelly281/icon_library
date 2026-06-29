import { mdiToggleSwitchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitchOutline(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitchOutline} {...props} />;
}

export { mdiToggleSwitchOutline as path };
