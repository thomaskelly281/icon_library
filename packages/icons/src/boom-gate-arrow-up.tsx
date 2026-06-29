import { mdiBoomGateArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGateArrowUp(props: IconComponentProps) {
  return <Icon path={mdiBoomGateArrowUp} {...props} />;
}

export { mdiBoomGateArrowUp as path };
