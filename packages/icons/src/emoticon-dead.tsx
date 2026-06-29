import { mdiEmoticonDead } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonDead(props: IconComponentProps) {
  return <Icon path={mdiEmoticonDead} {...props} />;
}

export { mdiEmoticonDead as path };
