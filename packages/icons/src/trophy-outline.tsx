import { mdiTrophyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrophyOutline(props: IconComponentProps) {
  return <Icon path={mdiTrophyOutline} {...props} />;
}

export { mdiTrophyOutline as path };
