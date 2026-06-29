import { mdiEmailOpenMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOpenMultiple(props: IconComponentProps) {
  return <Icon path={mdiEmailOpenMultiple} {...props} />;
}

export { mdiEmailOpenMultiple as path };
