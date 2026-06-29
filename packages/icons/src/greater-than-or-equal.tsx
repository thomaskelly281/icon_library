import { mdiGreaterThanOrEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GreaterThanOrEqual(props: IconComponentProps) {
  return <Icon path={mdiGreaterThanOrEqual} {...props} />;
}

export { mdiGreaterThanOrEqual as path };
