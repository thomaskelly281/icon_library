import { mdiAxisYArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisYArrow(props: IconComponentProps) {
  return <Icon path={mdiAxisYArrow} {...props} />;
}

export { mdiAxisYArrow as path };
