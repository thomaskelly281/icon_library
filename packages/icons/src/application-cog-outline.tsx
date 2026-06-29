import { mdiApplicationCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationCogOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationCogOutline} {...props} />;
}

export { mdiApplicationCogOutline as path };
