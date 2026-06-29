import { mdiPanVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanVertical(props: IconComponentProps) {
  return <Icon path={mdiPanVertical} {...props} />;
}

export { mdiPanVertical as path };
