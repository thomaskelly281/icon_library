import { mdiCogTransferOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogTransferOutline(props: IconComponentProps) {
  return <Icon path={mdiCogTransferOutline} {...props} />;
}

export { mdiCogTransferOutline as path };
