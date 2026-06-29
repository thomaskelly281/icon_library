import { mdiLocationExit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LocationExit(props: IconComponentProps) {
  return <Icon path={mdiLocationExit} {...props} />;
}

export { mdiLocationExit as path };
