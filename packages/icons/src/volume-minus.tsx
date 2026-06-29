import { mdiVolumeMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeMinus(props: IconComponentProps) {
  return <Icon path={mdiVolumeMinus} {...props} />;
}

export { mdiVolumeMinus as path };
