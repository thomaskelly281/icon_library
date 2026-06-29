import { mdiStickerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerOutline(props: IconComponentProps) {
  return <Icon path={mdiStickerOutline} {...props} />;
}

export { mdiStickerOutline as path };
