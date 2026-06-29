import { mdiVolumeMute } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeMute(props: IconComponentProps) {
  return <Icon path={mdiVolumeMute} {...props} />;
}

export { mdiVolumeMute as path };
