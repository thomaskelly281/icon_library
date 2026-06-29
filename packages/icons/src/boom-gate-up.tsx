import { mdiBoomGateUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGateUp(props: IconComponentProps) {
  return <Icon path={mdiBoomGateUp} {...props} />;
}

export { mdiBoomGateUp as path };
