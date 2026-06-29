import { mdiCallMerge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CallMerge(props: IconComponentProps) {
  return <Icon path={mdiCallMerge} {...props} />;
}

export { mdiCallMerge as path };
