import { mdiStickerPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerPlusOutline} {...props} />;
}

export { mdiStickerPlusOutline as path };
