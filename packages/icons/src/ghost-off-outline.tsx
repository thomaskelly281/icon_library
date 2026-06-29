import { mdiGhostOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GhostOffOutline(props: IconComponentProps) {
  return <Icon path={mdiGhostOffOutline} {...props} />;
}

export { mdiGhostOffOutline as path };
