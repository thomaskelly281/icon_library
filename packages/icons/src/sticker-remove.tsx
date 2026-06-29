import { mdiStickerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerRemove(props: IconComponentProps) {
  return <Icon path={mdiStickerRemove} {...props} />;
}

export { mdiStickerRemove as path };
