import { mdiStickerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerCheck(props: IconComponentProps) {
  return <Icon path={mdiStickerCheck} {...props} />;
}

export { mdiStickerCheck as path };
