import { mdiStickerTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerTextOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerTextOutline} {...props} />;
}

export { mdiStickerTextOutline as path };
