import { mdiRocketLaunchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RocketLaunchOutline(props: IconComponentProps) {
  return <Icon path={mdiRocketLaunchOutline} {...props} />;
}

export { mdiRocketLaunchOutline as path };
