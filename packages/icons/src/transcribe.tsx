import { mdiTranscribe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Transcribe(props: IconComponentProps) {
  return <Icon path={mdiTranscribe} {...props} />;
}

export { mdiTranscribe as path };
