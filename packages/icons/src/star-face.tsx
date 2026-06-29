import { mdiStarFace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarFace(props: IconComponentProps) {
  return <Icon path={mdiStarFace} {...props} />;
}

export { mdiStarFace as path };
