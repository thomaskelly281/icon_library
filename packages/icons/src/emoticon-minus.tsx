import { mdiEmoticonMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonMinus(props: IconComponentProps) {
  return <Icon path={mdiEmoticonMinus} {...props} />;
}

export { mdiEmoticonMinus as path };
