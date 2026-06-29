import { mdiAxisArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisArrow(props: IconComponentProps) {
  return <Icon path={mdiAxisArrow} {...props} />;
}

export { mdiAxisArrow as path };
