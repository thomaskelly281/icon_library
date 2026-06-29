import { mdiConsoleNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ConsoleNetwork(props: IconComponentProps) {
  return <Icon path={mdiConsoleNetwork} {...props} />;
}

export { mdiConsoleNetwork as path };
