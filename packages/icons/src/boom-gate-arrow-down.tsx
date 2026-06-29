import { mdiBoomGateArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGateArrowDown(props: IconComponentProps) {
  return <Icon path={mdiBoomGateArrowDown} {...props} />;
}

export { mdiBoomGateArrowDown as path };
