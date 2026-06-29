import { mdiStarCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarCircle(props: IconComponentProps) {
  return <Icon path={mdiStarCircle} {...props} />;
}

export { mdiStarCircle as path };
