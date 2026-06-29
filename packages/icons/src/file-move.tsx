import { mdiFileMove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMove(props: IconComponentProps) {
  return <Icon path={mdiFileMove} {...props} />;
}

export { mdiFileMove as path };
