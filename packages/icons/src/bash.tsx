import { mdiBash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bash(props: IconComponentProps) {
  return <Icon path={mdiBash} {...props} />;
}

export { mdiBash as path };
