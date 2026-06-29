import { mdiEmoticonConfused } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonConfused(props: IconComponentProps) {
  return <Icon path={mdiEmoticonConfused} {...props} />;
}

export { mdiEmoticonConfused as path };
