import { mdiTrophyBroken } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrophyBroken(props: IconComponentProps) {
  return <Icon path={mdiTrophyBroken} {...props} />;
}

export { mdiTrophyBroken as path };
