import { mdiSelectMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectMultiple(props: IconComponentProps) {
  return <Icon path={mdiSelectMultiple} {...props} />;
}

export { mdiSelectMultiple as path };
