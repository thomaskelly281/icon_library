import { mdiPanLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanLeft(props: IconComponentProps) {
  return <Icon path={mdiPanLeft} {...props} />;
}

export { mdiPanLeft as path };
