import { mdiHockeyPuck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HockeyPuck(props: IconComponentProps) {
  return <Icon path={mdiHockeyPuck} {...props} />;
}

export { mdiHockeyPuck as path };
