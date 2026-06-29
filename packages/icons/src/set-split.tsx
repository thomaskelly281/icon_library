import { mdiSetSplit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetSplit(props: IconComponentProps) {
  return <Icon path={mdiSetSplit} {...props} />;
}

export { mdiSetSplit as path };
