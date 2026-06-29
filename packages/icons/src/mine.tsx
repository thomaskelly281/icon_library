import { mdiMine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mine(props: IconComponentProps) {
  return <Icon path={mdiMine} {...props} />;
}

export { mdiMine as path };
