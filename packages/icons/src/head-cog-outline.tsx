import { mdiHeadCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadCogOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadCogOutline} {...props} />;
}

export { mdiHeadCogOutline as path };
