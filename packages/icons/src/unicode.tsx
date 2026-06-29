import { mdiUnicode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Unicode(props: IconComponentProps) {
  return <Icon path={mdiUnicode} {...props} />;
}

export { mdiUnicode as path };
