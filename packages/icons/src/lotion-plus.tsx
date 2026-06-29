import { mdiLotionPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LotionPlus(props: IconComponentProps) {
  return <Icon path={mdiLotionPlus} {...props} />;
}

export { mdiLotionPlus as path };
