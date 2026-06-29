import { mdiStarCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCogOutline(props: IconComponentProps) {
  return <Icon path={mdiStarCogOutline} {...props} />;
}

export { mdiStarCogOutline as path };
