import { mdiTrophyVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrophyVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiTrophyVariantOutline} {...props} />;
}

export { mdiTrophyVariantOutline as path };
