import { mdiAccountTieVoiceOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTieVoiceOff(props: IconComponentProps) {
  return <Icon path={mdiAccountTieVoiceOff} {...props} />;
}

export { mdiAccountTieVoiceOff as path };
