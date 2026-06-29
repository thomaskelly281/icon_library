import { mdiEmoticonPoop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonPoop(props: IconComponentProps) {
  return <Icon path={mdiEmoticonPoop} {...props} />;
}

export { mdiEmoticonPoop as path };
