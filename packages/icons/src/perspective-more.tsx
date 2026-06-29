import { mdiPerspectiveMore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PerspectiveMore(props: IconComponentProps) {
  return <Icon path={mdiPerspectiveMore} {...props} />;
}

export { mdiPerspectiveMore as path };
