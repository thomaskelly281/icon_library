import { mdiStarFourPointsBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFourPointsBox(props: IconComponentProps) {
  return <Icon path={mdiStarFourPointsBox} {...props} />;
}

export { mdiStarFourPointsBox as path };
