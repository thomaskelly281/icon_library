import { mdiMicrosoftOutlook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftOutlook(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftOutlook} {...props} />;
}

export { mdiMicrosoftOutlook as path };
