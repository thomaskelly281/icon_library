import { mdiSelectInverse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectInverse(props: IconComponentProps) {
  return <Icon path={mdiSelectInverse} {...props} />;
}

export { mdiSelectInverse as path };
