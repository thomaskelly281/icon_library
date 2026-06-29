import { mdiStickerEmoji } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerEmoji(props: IconComponentProps) {
  return <Icon path={mdiStickerEmoji} {...props} />;
}

export { mdiStickerEmoji as path };
