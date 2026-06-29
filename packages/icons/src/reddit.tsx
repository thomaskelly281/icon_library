import { mdiReddit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reddit(props: IconComponentProps) {
  return <Icon path={mdiReddit} {...props} />;
}

export { mdiReddit as path };
