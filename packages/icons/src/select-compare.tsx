import { mdiSelectCompare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectCompare(props: IconComponentProps) {
  return <Icon path={mdiSelectCompare} {...props} />;
}

export { mdiSelectCompare as path };
