import { mdiMicrosoftWindowsClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftWindowsClassic(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftWindowsClassic} {...props} />;
}

export { mdiMicrosoftWindowsClassic as path };
