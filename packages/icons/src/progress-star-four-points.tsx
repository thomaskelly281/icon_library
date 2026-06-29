import { mdiProgressStarFourPoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressStarFourPoints(props: IconComponentProps) {
  return <Icon path={mdiProgressStarFourPoints} {...props} />;
}

export { mdiProgressStarFourPoints as path };
