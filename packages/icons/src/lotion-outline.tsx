import { mdiLotionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LotionOutline(props: IconComponentProps) {
  return <Icon path={mdiLotionOutline} {...props} />;
}

export { mdiLotionOutline as path };
