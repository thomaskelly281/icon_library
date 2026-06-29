import { mdiStarShootingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarShootingOutline(props: IconComponentProps) {
  return <Icon path={mdiStarShootingOutline} {...props} />;
}

export { mdiStarShootingOutline as path };
