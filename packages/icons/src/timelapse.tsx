import { mdiTimelapse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timelapse(props: IconComponentProps) {
  return <Icon path={mdiTimelapse} {...props} />;
}

export { mdiTimelapse as path };
