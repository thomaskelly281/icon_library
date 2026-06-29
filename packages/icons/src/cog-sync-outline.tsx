import { mdiCogSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiCogSyncOutline} {...props} />;
}

export { mdiCogSyncOutline as path };
