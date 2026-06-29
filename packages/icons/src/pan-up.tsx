import { mdiPanUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanUp(props: IconComponentProps) {
  return <Icon path={mdiPanUp} {...props} />;
}

export { mdiPanUp as path };
