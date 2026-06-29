import { mdiRocketLaunch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RocketLaunch(props: IconComponentProps) {
  return <Icon path={mdiRocketLaunch} {...props} />;
}

export { mdiRocketLaunch as path };
