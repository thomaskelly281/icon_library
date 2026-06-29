import { mdiFootPrint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FootPrint(props: IconComponentProps) {
  return <Icon path={mdiFootPrint} {...props} />;
}

export { mdiFootPrint as path };
