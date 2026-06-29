import { mdiEmoticonLol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonLol(props: IconComponentProps) {
  return <Icon path={mdiEmoticonLol} {...props} />;
}

export { mdiEmoticonLol as path };
