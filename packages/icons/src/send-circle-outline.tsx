import { mdiSendCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiSendCircleOutline} {...props} />;
}

export { mdiSendCircleOutline as path };
