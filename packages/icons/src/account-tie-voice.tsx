import { mdiAccountTieVoice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTieVoice(props: IconComponentProps) {
  return <Icon path={mdiAccountTieVoice} {...props} />;
}

export { mdiAccountTieVoice as path };
