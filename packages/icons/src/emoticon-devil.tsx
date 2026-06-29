import { mdiEmoticonDevil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonDevil(props: IconComponentProps) {
  return <Icon path={mdiEmoticonDevil} {...props} />;
}

export { mdiEmoticonDevil as path };
