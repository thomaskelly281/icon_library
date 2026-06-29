import { mdiMessageProcessingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageProcessingOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageProcessingOutline} {...props} />;
}

export { mdiMessageProcessingOutline as path };
