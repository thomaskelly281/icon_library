import { mdiMicrophoneQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneQuestion(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneQuestion} {...props} />;
}

export { mdiMicrophoneQuestion as path };
