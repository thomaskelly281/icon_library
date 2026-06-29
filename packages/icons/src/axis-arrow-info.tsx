import { mdiAxisArrowInfo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisArrowInfo(props: IconComponentProps) {
  return <Icon path={mdiAxisArrowInfo} {...props} />;
}

export { mdiAxisArrowInfo as path };
