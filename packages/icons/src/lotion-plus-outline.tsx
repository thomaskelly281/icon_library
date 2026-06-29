import { mdiLotionPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LotionPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiLotionPlusOutline} {...props} />;
}

export { mdiLotionPlusOutline as path };
