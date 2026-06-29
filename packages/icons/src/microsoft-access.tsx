import { mdiMicrosoftAccess } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftAccess(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftAccess} {...props} />;
}

export { mdiMicrosoftAccess as path };
