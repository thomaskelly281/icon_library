import { mdiHandSaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandSaw(props: IconComponentProps) {
  return <Icon path={mdiHandSaw} {...props} />;
}

export { mdiHandSaw as path };
