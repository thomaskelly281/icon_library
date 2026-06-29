import { mdiConsoleLine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ConsoleLine(props: IconComponentProps) {
  return <Icon path={mdiConsoleLine} {...props} />;
}

export { mdiConsoleLine as path };
