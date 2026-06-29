import { mdiStickerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerMinus(props: IconComponentProps) {
  return <Icon path={mdiStickerMinus} {...props} />;
}

export { mdiStickerMinus as path };
