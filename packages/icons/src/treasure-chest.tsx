import { mdiTreasureChest } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TreasureChest(props: IconComponentProps) {
  return <Icon path={mdiTreasureChest} {...props} />;
}

export { mdiTreasureChest as path };
