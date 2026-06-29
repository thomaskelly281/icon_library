import { mdiSort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sort(props: IconComponentProps) {
  return <Icon path={mdiSort} {...props} />;
}

export { mdiSort as path };
