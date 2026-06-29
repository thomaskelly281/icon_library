import { mdiLessThanOrEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LessThanOrEqual(props: IconComponentProps) {
  return <Icon path={mdiLessThanOrEqual} {...props} />;
}

export { mdiLessThanOrEqual as path };
