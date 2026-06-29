import { mdiExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Export(props: IconComponentProps) {
  return <Icon path={mdiExport} {...props} />;
}

export { mdiExport as path };
