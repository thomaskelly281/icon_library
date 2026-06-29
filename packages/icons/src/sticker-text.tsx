import { mdiStickerText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerText(props: IconComponentProps) {
  return <Icon path={mdiStickerText} {...props} />;
}

export { mdiStickerText as path };
