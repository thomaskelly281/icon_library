import { mdiRegex } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Regex(props: IconComponentProps) {
  return <Icon path={mdiRegex} {...props} />;
}

export { mdiRegex as path };
