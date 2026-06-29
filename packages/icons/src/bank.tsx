import { mdiBank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bank(props: IconComponentProps) {
  return <Icon path={mdiBank} {...props} />;
}

export { mdiBank as path };
