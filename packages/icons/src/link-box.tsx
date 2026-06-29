import { mdiLinkBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkBox(props: IconComponentProps) {
  return <Icon path={mdiLinkBox} {...props} />;
}

export { mdiLinkBox as path };
