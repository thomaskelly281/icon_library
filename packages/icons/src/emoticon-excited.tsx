import { mdiEmoticonExcited } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonExcited(props: IconComponentProps) {
  return <Icon path={mdiEmoticonExcited} {...props} />;
}

export { mdiEmoticonExcited as path };
