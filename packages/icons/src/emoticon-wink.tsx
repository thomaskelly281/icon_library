import { mdiEmoticonWink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonWink(props: IconComponentProps) {
  return <Icon path={mdiEmoticonWink} {...props} />;
}

export { mdiEmoticonWink as path };
