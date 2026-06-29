import { mdiSilo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Silo(props: IconComponentProps) {
  return <Icon path={mdiSilo} {...props} />;
}

export { mdiSilo as path };
