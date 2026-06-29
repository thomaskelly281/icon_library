import { mdiImageFilterFrames } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageFilterFrames(props: IconComponentProps) {
  return <Icon path={mdiImageFilterFrames} {...props} />;
}

export { mdiImageFilterFrames as path };
