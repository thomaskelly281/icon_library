import { mdiApplicationExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationExport(props: IconComponentProps) {
  return <Icon path={mdiApplicationExport} {...props} />;
}

export { mdiApplicationExport as path };
