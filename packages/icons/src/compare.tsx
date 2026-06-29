import { mdiCompare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Compare(props: IconComponentProps) {
  return <Icon path={mdiCompare} {...props} />;
}

export { mdiCompare as path };
