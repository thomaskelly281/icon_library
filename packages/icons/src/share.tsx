import { mdiShare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Share(props: IconComponentProps) {
  return <Icon path={mdiShare} {...props} />;
}

export { mdiShare as path };
