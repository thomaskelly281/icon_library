import { mdiTranscribeClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TranscribeClose(props: IconComponentProps) {
  return <Icon path={mdiTranscribeClose} {...props} />;
}

export { mdiTranscribeClose as path };
