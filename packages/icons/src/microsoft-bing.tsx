import { mdiMicrosoftBing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftBing(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftBing} {...props} />;
}

export { mdiMicrosoftBing as path };
