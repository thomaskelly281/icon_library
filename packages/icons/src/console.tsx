import { mdiConsole } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Console(props: IconComponentProps) {
  return <Icon path={mdiConsole} {...props} />;
}

export { mdiConsole as path };
