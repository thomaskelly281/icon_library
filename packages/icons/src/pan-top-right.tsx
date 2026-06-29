import { mdiPanTopRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanTopRight(props: IconComponentProps) {
  return <Icon path={mdiPanTopRight} {...props} />;
}

export { mdiPanTopRight as path };
