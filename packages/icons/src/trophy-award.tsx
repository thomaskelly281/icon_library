import { mdiTrophyAward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrophyAward(props: IconComponentProps) {
  return <Icon path={mdiTrophyAward} {...props} />;
}

export { mdiTrophyAward as path };
