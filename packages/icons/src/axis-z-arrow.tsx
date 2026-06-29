import { mdiAxisZArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisZArrow(props: IconComponentProps) {
  return <Icon path={mdiAxisZArrow} {...props} />;
}

export { mdiAxisZArrow as path };
