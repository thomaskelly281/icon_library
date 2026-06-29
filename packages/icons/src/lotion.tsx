import { mdiLotion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lotion(props: IconComponentProps) {
  return <Icon path={mdiLotion} {...props} />;
}

export { mdiLotion as path };
