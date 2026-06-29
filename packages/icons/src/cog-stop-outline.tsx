import { mdiCogStopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogStopOutline(props: IconComponentProps) {
  return <Icon path={mdiCogStopOutline} {...props} />;
}

export { mdiCogStopOutline as path };
