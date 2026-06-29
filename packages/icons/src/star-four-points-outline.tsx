import { mdiStarFourPointsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFourPointsOutline(props: IconComponentProps) {
  return <Icon path={mdiStarFourPointsOutline} {...props} />;
}

export { mdiStarFourPointsOutline as path };
