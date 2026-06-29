import { mdiStarFourPointsSmall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFourPointsSmall(props: IconComponentProps) {
  return <Icon path={mdiStarFourPointsSmall} {...props} />;
}

export { mdiStarFourPointsSmall as path };
