import { mdiSticker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sticker(props: IconComponentProps) {
  return <Icon path={mdiSticker} {...props} />;
}

export { mdiSticker as path };
