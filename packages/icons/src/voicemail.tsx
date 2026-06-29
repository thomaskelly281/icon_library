import { mdiVoicemail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Voicemail(props: IconComponentProps) {
  return <Icon path={mdiVoicemail} {...props} />;
}

export { mdiVoicemail as path };
