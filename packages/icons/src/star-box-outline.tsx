import { mdiStarBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiStarBoxOutline} {...props} />;
}

export { mdiStarBoxOutline as path };
