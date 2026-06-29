import { mdiSkateboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Skateboard(props: IconComponentProps) {
  return <Icon path={mdiSkateboard} {...props} />;
}

export { mdiSkateboard as path };
