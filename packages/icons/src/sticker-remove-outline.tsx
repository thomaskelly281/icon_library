import { mdiStickerRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerRemoveOutline} {...props} />;
}

export { mdiStickerRemoveOutline as path };
