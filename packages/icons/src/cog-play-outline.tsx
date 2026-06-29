import { mdiCogPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiCogPlayOutline} {...props} />;
}

export { mdiCogPlayOutline as path };
