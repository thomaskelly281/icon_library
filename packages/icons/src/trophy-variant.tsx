import { mdiTrophyVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrophyVariant(props: IconComponentProps) {
  return <Icon path={mdiTrophyVariant} {...props} />;
}

export { mdiTrophyVariant as path };
