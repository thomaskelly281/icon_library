import { mdiHeartCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartCogOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartCogOutline} {...props} />;
}

export { mdiHeartCogOutline as path };
