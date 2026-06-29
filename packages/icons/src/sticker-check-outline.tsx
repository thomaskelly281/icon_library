import { mdiStickerCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerCheckOutline} {...props} />;
}

export { mdiStickerCheckOutline as path };
