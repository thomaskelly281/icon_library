import { mdiStickerAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerAlertOutline} {...props} />;
}

export { mdiStickerAlertOutline as path };
