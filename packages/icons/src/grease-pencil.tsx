import { mdiGreasePencil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GreasePencil(props: IconComponentProps) {
  return <Icon path={mdiGreasePencil} {...props} />;
}

export { mdiGreasePencil as path };
