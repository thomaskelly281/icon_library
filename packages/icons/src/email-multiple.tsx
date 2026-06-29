import { mdiEmailMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailMultiple(props: IconComponentProps) {
  return <Icon path={mdiEmailMultiple} {...props} />;
}

export { mdiEmailMultiple as path };
