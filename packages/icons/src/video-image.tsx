import { mdiVideoImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoImage(props: IconComponentProps) {
  return <Icon path={mdiVideoImage} {...props} />;
}

export { mdiVideoImage as path };
