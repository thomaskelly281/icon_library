import { mdiTableCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableCog(props: IconComponentProps) {
  return <Icon path={mdiTableCog} {...props} />;
}

export { mdiTableCog as path };
