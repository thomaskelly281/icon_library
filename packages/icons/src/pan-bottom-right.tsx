import { mdiPanBottomRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanBottomRight(props: IconComponentProps) {
  return <Icon path={mdiPanBottomRight} {...props} />;
}

export { mdiPanBottomRight as path };
