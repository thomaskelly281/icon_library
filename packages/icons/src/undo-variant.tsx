import { mdiUndoVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UndoVariant(props: IconComponentProps) {
  return <Icon path={mdiUndoVariant} {...props} />;
}

export { mdiUndoVariant as path };
