import { mdiMicrosoftAzure } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftAzure(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftAzure} {...props} />;
}

export { mdiMicrosoftAzure as path };
