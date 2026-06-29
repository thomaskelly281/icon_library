import { mdiCircularSaw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircularSaw(props: IconComponentProps) {
  return <Icon path={mdiCircularSaw} {...props} />;
}

export { mdiCircularSaw as path };
