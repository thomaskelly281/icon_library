import { mdiFootballHelmet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FootballHelmet(props: IconComponentProps) {
  return <Icon path={mdiFootballHelmet} {...props} />;
}

export { mdiFootballHelmet as path };
