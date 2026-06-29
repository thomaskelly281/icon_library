import { mdiAccountVoiceOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountVoiceOff(props: IconComponentProps) {
  return <Icon path={mdiAccountVoiceOff} {...props} />;
}

export { mdiAccountVoiceOff as path };
