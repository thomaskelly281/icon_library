import { mdiWebPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebPlus(props: IconComponentProps) {
  return <Icon path={mdiWebPlus} {...props} />;
}

export { mdiWebPlus as path };
