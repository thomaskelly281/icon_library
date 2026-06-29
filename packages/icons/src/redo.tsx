import { mdiRedo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Redo(props: IconComponentProps) {
  return <Icon path={mdiRedo} {...props} />;
}

export { mdiRedo as path };
