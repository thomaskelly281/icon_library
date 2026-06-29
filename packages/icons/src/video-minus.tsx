import { mdiVideoMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoMinus(props: IconComponentProps) {
  return <Icon path={mdiVideoMinus} {...props} />;
}

export { mdiVideoMinus as path };
