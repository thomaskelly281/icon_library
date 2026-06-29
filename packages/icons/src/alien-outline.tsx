import { mdiAlienOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlienOutline(props: IconComponentProps) {
  return <Icon path={mdiAlienOutline} {...props} />;
}

export { mdiAlienOutline as path };
