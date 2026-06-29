import { mdiDiamondStone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiamondStone(props: IconComponentProps) {
  return <Icon path={mdiDiamondStone} {...props} />;
}

export { mdiDiamondStone as path };
