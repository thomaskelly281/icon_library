import { mdiPanHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanHorizontal(props: IconComponentProps) {
  return <Icon path={mdiPanHorizontal} {...props} />;
}

export { mdiPanHorizontal as path };
