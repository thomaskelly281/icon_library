import { mdiPanRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanRight(props: IconComponentProps) {
  return <Icon path={mdiPanRight} {...props} />;
}

export { mdiPanRight as path };
