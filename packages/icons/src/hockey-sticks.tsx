import { mdiHockeySticks } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HockeySticks(props: IconComponentProps) {
  return <Icon path={mdiHockeySticks} {...props} />;
}

export { mdiHockeySticks as path };
