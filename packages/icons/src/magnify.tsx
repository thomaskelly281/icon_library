import { mdiMagnify } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Magnify(props: IconComponentProps) {
  return <Icon path={mdiMagnify} {...props} />;
}

export { mdiMagnify as path };
