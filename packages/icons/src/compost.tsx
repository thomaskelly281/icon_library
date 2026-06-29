import { mdiCompost } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Compost(props: IconComponentProps) {
  return <Icon path={mdiCompost} {...props} />;
}

export { mdiCompost as path };
