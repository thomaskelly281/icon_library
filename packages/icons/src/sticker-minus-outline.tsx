import { mdiStickerMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerMinusOutline} {...props} />;
}

export { mdiStickerMinusOutline as path };
