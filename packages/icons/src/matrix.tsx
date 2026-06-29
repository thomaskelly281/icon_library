import { mdiMatrix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Matrix(props: IconComponentProps) {
  return <Icon path={mdiMatrix} {...props} />;
}

export { mdiMatrix as path };
