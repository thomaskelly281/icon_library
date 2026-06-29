import { mdiImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Import(props: IconComponentProps) {
  return <Icon path={mdiImport} {...props} />;
}

export { mdiImport as path };
