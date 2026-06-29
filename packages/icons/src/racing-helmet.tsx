import { mdiRacingHelmet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RacingHelmet(props: IconComponentProps) {
  return <Icon path={mdiRacingHelmet} {...props} />;
}

export { mdiRacingHelmet as path };
