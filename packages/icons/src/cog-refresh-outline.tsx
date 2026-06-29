import { mdiCogRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiCogRefreshOutline} {...props} />;
}

export { mdiCogRefreshOutline as path };
