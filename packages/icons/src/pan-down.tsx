import { mdiPanDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanDown(props: IconComponentProps) {
  return <Icon path={mdiPanDown} {...props} />;
}

export { mdiPanDown as path };
