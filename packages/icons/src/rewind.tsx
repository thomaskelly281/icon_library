import { mdiRewind } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rewind(props: IconComponentProps) {
  return <Icon path={mdiRewind} {...props} />;
}

export { mdiRewind as path };
