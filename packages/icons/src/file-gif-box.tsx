import { mdiFileGifBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileGifBox(props: IconComponentProps) {
  return <Icon path={mdiFileGifBox} {...props} />;
}

export { mdiFileGifBox as path };
