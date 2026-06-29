import { mdiCodeGreaterThanOrEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeGreaterThanOrEqual(props: IconComponentProps) {
  return <Icon path={mdiCodeGreaterThanOrEqual} {...props} />;
}

export { mdiCodeGreaterThanOrEqual as path };
