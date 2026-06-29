import { mdiTablePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TablePlus(props: IconComponentProps) {
  return <Icon path={mdiTablePlus} {...props} />;
}

export { mdiTablePlus as path };
