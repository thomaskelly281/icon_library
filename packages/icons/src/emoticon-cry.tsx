import { mdiEmoticonCry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonCry(props: IconComponentProps) {
  return <Icon path={mdiEmoticonCry} {...props} />;
}

export { mdiEmoticonCry as path };
