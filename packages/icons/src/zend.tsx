import { mdiZend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Zend(props: IconComponentProps) {
  return <Icon path={mdiZend} {...props} />;
}

export { mdiZend as path };
