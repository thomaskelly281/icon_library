import { mdiSetMerge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetMerge(props: IconComponentProps) {
  return <Icon path={mdiSetMerge} {...props} />;
}

export { mdiSetMerge as path };
