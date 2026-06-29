import { mdiTableMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableMultiple(props: IconComponentProps) {
  return <Icon path={mdiTableMultiple} {...props} />;
}

export { mdiTableMultiple as path };
