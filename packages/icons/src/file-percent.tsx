import { mdiFilePercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePercent(props: IconComponentProps) {
  return <Icon path={mdiFilePercent} {...props} />;
}

export { mdiFilePercent as path };
