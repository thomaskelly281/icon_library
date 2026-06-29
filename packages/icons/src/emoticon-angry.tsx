import { mdiEmoticonAngry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonAngry(props: IconComponentProps) {
  return <Icon path={mdiEmoticonAngry} {...props} />;
}

export { mdiEmoticonAngry as path };
