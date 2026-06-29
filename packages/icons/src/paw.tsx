import { mdiPaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Paw(props: IconComponentProps) {
  return <Icon path={mdiPaw} {...props} />;
}

export { mdiPaw as path };
