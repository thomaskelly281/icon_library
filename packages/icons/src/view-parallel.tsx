import { mdiViewParallel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewParallel(props: IconComponentProps) {
  return <Icon path={mdiViewParallel} {...props} />;
}

export { mdiViewParallel as path };
