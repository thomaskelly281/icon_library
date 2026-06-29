import { mdiEmoticonPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonPlus(props: IconComponentProps) {
  return <Icon path={mdiEmoticonPlus} {...props} />;
}

export { mdiEmoticonPlus as path };
