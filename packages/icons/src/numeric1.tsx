import { mdiNumeric1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric1(props: IconComponentProps) {
  return <Icon path={mdiNumeric1} {...props} />;
}

export { mdiNumeric1 as path };
