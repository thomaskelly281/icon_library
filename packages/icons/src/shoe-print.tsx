import { mdiShoePrint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoePrint(props: IconComponentProps) {
  return <Icon path={mdiShoePrint} {...props} />;
}

export { mdiShoePrint as path };
