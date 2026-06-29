import { mdiCircleExpand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleExpand(props: IconComponentProps) {
  return <Icon path={mdiCircleExpand} {...props} />;
}

export { mdiCircleExpand as path };
