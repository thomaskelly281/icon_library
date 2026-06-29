import { mdiEmoticonHappy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonHappy(props: IconComponentProps) {
  return <Icon path={mdiEmoticonHappy} {...props} />;
}

export { mdiEmoticonHappy as path };
