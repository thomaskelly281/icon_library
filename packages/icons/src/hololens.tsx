import { mdiHololens } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hololens(props: IconComponentProps) {
  return <Icon path={mdiHololens} {...props} />;
}

export { mdiHololens as path };
