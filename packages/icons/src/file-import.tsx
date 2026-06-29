import { mdiFileImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImport(props: IconComponentProps) {
  return <Icon path={mdiFileImport} {...props} />;
}

export { mdiFileImport as path };
