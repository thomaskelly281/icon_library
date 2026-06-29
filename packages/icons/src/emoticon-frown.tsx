import { mdiEmoticonFrown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonFrown(props: IconComponentProps) {
  return <Icon path={mdiEmoticonFrown} {...props} />;
}

export { mdiEmoticonFrown as path };
