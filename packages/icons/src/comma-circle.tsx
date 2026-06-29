import { mdiCommaCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommaCircle(props: IconComponentProps) {
  return <Icon path={mdiCommaCircle} {...props} />;
}

export { mdiCommaCircle as path };
