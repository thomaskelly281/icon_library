import { mdiScoreboardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScoreboardOutline(props: IconComponentProps) {
  return <Icon path={mdiScoreboardOutline} {...props} />;
}

export { mdiScoreboardOutline as path };
