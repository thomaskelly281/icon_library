import { mdiBoomGateAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoomGateAlert(props: IconComponentProps) {
  return <Icon path={mdiBoomGateAlert} {...props} />;
}

export { mdiBoomGateAlert as path };
