import { mdiStarThreePointsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarThreePointsOutline(props: IconComponentProps) {
  return <Icon path={mdiStarThreePointsOutline} {...props} />;
}

export { mdiStarThreePointsOutline as path };
