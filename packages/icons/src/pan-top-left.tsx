import { mdiPanTopLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanTopLeft(props: IconComponentProps) {
  return <Icon path={mdiPanTopLeft} {...props} />;
}

export { mdiPanTopLeft as path };
