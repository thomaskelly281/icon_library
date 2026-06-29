import { mdiCheckCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckCircle} {...props} />;
}

export { mdiCheckCircle as path };
