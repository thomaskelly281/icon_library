import { mdiFootballAustralian } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FootballAustralian(props: IconComponentProps) {
  return <Icon path={mdiFootballAustralian} {...props} />;
}

export { mdiFootballAustralian as path };
