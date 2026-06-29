import { mdiMicrosoftOffice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftOffice(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftOffice} {...props} />;
}

export { mdiMicrosoftOffice as path };
