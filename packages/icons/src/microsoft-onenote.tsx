import { mdiMicrosoftOnenote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftOnenote(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftOnenote} {...props} />;
}

export { mdiMicrosoftOnenote as path };
