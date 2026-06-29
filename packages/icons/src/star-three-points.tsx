import { mdiStarThreePoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarThreePoints(props: IconComponentProps) {
  return <Icon path={mdiStarThreePoints} {...props} />;
}

export { mdiStarThreePoints as path };
