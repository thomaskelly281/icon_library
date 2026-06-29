import { mdiLinkPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkPlus(props: IconComponentProps) {
  return <Icon path={mdiLinkPlus} {...props} />;
}

export { mdiLinkPlus as path };
