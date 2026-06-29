import { mdiBoomGate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGate(props: IconComponentProps) {
  return <Icon path={mdiBoomGate} {...props} />;
}

export { mdiBoomGate as path };
