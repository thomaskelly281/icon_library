import { mdiStickerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StickerAlert(props: IconComponentProps) {
  return <Icon path={mdiStickerAlert} {...props} />;
}

export { mdiStickerAlert as path };
