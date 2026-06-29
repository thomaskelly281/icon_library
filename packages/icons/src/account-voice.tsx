import { mdiAccountVoice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountVoice(props: IconComponentProps) {
  return <Icon path={mdiAccountVoice} {...props} />;
}

export { mdiAccountVoice as path };
