import { mdiMicrosoftWindows } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftWindows(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftWindows} {...props} />;
}

export { mdiMicrosoftWindows as path };
