import { mdiExclamation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Exclamation(props: IconComponentProps) {
  return <Icon path={mdiExclamation} {...props} />;
}

export { mdiExclamation as path };
