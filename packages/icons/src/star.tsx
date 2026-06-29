import { mdiStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Star(props: IconComponentProps) {
  return <Icon path={mdiStar} {...props} />;
}

export { mdiStar as path };
