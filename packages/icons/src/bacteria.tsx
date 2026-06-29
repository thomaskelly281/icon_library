import { mdiBacteria } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bacteria(props: IconComponentProps) {
  return <Icon path={mdiBacteria} {...props} />;
}

export { mdiBacteria as path };
