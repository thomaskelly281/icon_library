import { mdiImageSizeSelectSmall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSizeSelectSmall(props: IconComponentProps) {
  return <Icon path={mdiImageSizeSelectSmall} {...props} />;
}

export { mdiImageSizeSelectSmall as path };
