import { mdiArrangeSendToBack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrangeSendToBack(props: IconComponentProps) {
  return <Icon path={mdiArrangeSendToBack} {...props} />;
}

export { mdiArrangeSendToBack as path };
