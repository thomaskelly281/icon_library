import { mdiFloppyVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FloppyVariant(props: IconComponentProps) {
  return <Icon path={mdiFloppyVariant} {...props} />;
}

export { mdiFloppyVariant as path };
