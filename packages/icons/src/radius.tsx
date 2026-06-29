import { mdiRadius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Radius(props: IconComponentProps) {
  return <Icon path={mdiRadius} {...props} />;
}

export { mdiRadius as path };
