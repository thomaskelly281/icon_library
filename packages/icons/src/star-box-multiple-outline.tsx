import { mdiStarBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiStarBoxMultipleOutline} {...props} />;
}

export { mdiStarBoxMultipleOutline as path };
