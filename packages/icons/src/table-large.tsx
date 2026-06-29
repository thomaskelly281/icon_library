import { mdiTableLarge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableLarge(props: IconComponentProps) {
  return <Icon path={mdiTableLarge} {...props} />;
}

export { mdiTableLarge as path };
