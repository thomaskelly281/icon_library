import { mdiMessageProcessing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageProcessing(props: IconComponentProps) {
  return <Icon path={mdiMessageProcessing} {...props} />;
}

export { mdiMessageProcessing as path };
