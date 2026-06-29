import { mdiScoreboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Scoreboard(props: IconComponentProps) {
  return <Icon path={mdiScoreboard} {...props} />;
}

export { mdiScoreboard as path };
