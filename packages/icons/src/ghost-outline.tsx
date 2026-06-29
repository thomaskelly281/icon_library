import { mdiGhostOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GhostOutline(props: IconComponentProps) {
  return <Icon path={mdiGhostOutline} {...props} />;
}

export { mdiGhostOutline as path };
