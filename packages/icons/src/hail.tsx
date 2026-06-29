import { mdiHail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hail(props: IconComponentProps) {
  return <Icon path={mdiHail} {...props} />;
}

export { mdiHail as path };
