import { mdiApplicationImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationImport(props: IconComponentProps) {
  return <Icon path={mdiApplicationImport} {...props} />;
}

export { mdiApplicationImport as path };
