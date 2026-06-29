import { mdiTableBorder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableBorder(props: IconComponentProps) {
  return <Icon path={mdiTableBorder} {...props} />;
}

export { mdiTableBorder as path };
