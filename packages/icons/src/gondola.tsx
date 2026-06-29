import { mdiGondola } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gondola(props: IconComponentProps) {
  return <Icon path={mdiGondola} {...props} />;
}

export { mdiGondola as path };
