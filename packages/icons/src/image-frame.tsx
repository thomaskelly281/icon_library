import { mdiImageFrame } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFrame(props: IconComponentProps) {
  return <Icon path={mdiImageFrame} {...props} />;
}

export { mdiImageFrame as path };
