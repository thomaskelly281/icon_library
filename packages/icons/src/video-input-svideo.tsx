import { mdiVideoInputSvideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoInputSvideo(props: IconComponentProps) {
  return <Icon path={mdiVideoInputSvideo} {...props} />;
}

export { mdiVideoInputSvideo as path };
