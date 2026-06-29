import { mdiPail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pail(props: IconComponentProps) {
  return <Icon path={mdiPail} {...props} />;
}

export { mdiPail as path };
