import { mdiStickerCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerCircleOutline} {...props} />;
}

export { mdiStickerCircleOutline as path };
