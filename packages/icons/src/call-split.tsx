import { mdiCallSplit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CallSplit(props: IconComponentProps) {
  return <Icon path={mdiCallSplit} {...props} />;
}

export { mdiCallSplit as path };
