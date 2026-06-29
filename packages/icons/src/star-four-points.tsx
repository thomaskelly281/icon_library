import { mdiStarFourPoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFourPoints(props: IconComponentProps) {
  return <Icon path={mdiStarFourPoints} {...props} />;
}

export { mdiStarFourPoints as path };
