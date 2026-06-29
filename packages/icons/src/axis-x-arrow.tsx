import { mdiAxisXArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisXArrow(props: IconComponentProps) {
  return <Icon path={mdiAxisXArrow} {...props} />;
}

export { mdiAxisXArrow as path };
