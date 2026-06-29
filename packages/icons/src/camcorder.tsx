import { mdiCamcorder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Camcorder(props: IconComponentProps) {
  return <Icon path={mdiCamcorder} {...props} />;
}

export { mdiCamcorder as path };
