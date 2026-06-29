import { mdiPanBottomLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanBottomLeft(props: IconComponentProps) {
  return <Icon path={mdiPanBottomLeft} {...props} />;
}

export { mdiPanBottomLeft as path };
