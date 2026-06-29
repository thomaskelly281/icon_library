import { mdiCodeLessThanOrEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeLessThanOrEqual(props: IconComponentProps) {
  return <Icon path={mdiCodeLessThanOrEqual} {...props} />;
}

export { mdiCodeLessThanOrEqual as path };
