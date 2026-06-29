import { mdiBackspace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Backspace(props: IconComponentProps) {
  return <Icon path={mdiBackspace} {...props} />;
}

export { mdiBackspace as path };
