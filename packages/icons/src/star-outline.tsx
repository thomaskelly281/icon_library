import { mdiStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarOutline(props: IconComponentProps) {
  return <Icon path={mdiStarOutline} {...props} />;
}

export { mdiStarOutline as path };
