import { mdiMerge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Merge(props: IconComponentProps) {
  return <Icon path={mdiMerge} {...props} />;
}

export { mdiMerge as path };
