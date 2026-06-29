import { mdiRecordPlayer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RecordPlayer(props: IconComponentProps) {
  return <Icon path={mdiRecordPlayer} {...props} />;
}

export { mdiRecordPlayer as path };
