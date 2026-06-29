import { mdiIronBoard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IronBoard(props: IconComponentProps) {
  return <Icon path={mdiIronBoard} {...props} />;
}

export { mdiIronBoard as path };
