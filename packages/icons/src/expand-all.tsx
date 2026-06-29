import { mdiExpandAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExpandAll(props: IconComponentProps) {
  return <Icon path={mdiExpandAll} {...props} />;
}

export { mdiExpandAll as path };
