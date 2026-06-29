import { mdiStickerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerPlus(props: IconComponentProps) {
  return <Icon path={mdiStickerPlus} {...props} />;
}

export { mdiStickerPlus as path };
