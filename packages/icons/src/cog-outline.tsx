import { mdiCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogOutline(props: IconComponentProps) {
  return <Icon path={mdiCogOutline} {...props} />;
}

export { mdiCogOutline as path };
