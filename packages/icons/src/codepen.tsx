import { mdiCodepen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Codepen(props: IconComponentProps) {
  return <Icon path={mdiCodepen} {...props} />;
}

export { mdiCodepen as path };
