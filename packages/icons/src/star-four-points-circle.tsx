import { mdiStarFourPointsCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFourPointsCircle(props: IconComponentProps) {
  return <Icon path={mdiStarFourPointsCircle} {...props} />;
}

export { mdiStarFourPointsCircle as path };
