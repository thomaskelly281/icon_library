import { mdiEmoticonKiss } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonKiss(props: IconComponentProps) {
  return <Icon path={mdiEmoticonKiss} {...props} />;
}

export { mdiEmoticonKiss as path };
