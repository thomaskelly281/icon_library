import { mdiMicrophoneQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneQuestionOutline} {...props} />;
}

export { mdiMicrophoneQuestionOutline as path };
