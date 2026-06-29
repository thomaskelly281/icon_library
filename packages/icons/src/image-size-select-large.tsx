import { mdiImageSizeSelectLarge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSizeSelectLarge(props: IconComponentProps) {
  return <Icon path={mdiImageSizeSelectLarge} {...props} />;
}

export { mdiImageSizeSelectLarge as path };
