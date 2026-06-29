import { mdiMapCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapCheck(props: IconComponentProps) {
  return <Icon path={mdiMapCheck} {...props} />;
}

export { mdiMapCheck as path };
