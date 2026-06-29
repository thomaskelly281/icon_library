import { mdiRedoVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RedoVariant(props: IconComponentProps) {
  return <Icon path={mdiRedoVariant} {...props} />;
}

export { mdiRedoVariant as path };
