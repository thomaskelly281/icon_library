import { mdiWrenchCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchCogOutline(props: IconComponentProps) {
  return <Icon path={mdiWrenchCogOutline} {...props} />;
}

export { mdiWrenchCogOutline as path };
