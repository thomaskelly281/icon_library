import { mdiLeek } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Leek(props: IconComponentProps) {
  return <Icon path={mdiLeek} {...props} />;
}

export { mdiLeek as path };
