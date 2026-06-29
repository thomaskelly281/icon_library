import { mdiPerspectiveLess } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PerspectiveLess(props: IconComponentProps) {
  return <Icon path={mdiPerspectiveLess} {...props} />;
}

export { mdiPerspectiveLess as path };
