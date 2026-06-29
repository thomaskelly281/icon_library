import { mdiCheckCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckCircleOutline} {...props} />;
}

export { mdiCheckCircleOutline as path };
