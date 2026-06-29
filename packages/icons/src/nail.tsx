import { mdiNail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nail(props: IconComponentProps) {
  return <Icon path={mdiNail} {...props} />;
}

export { mdiNail as path };
