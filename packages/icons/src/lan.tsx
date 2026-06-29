import { mdiLan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lan(props: IconComponentProps) {
  return <Icon path={mdiLan} {...props} />;
}

export { mdiLan as path };
