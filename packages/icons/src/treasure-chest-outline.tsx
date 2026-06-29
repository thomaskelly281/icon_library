import { mdiTreasureChestOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TreasureChestOutline(props: IconComponentProps) {
  return <Icon path={mdiTreasureChestOutline} {...props} />;
}

export { mdiTreasureChestOutline as path };
