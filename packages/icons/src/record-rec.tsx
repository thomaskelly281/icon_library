import { mdiRecordRec } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RecordRec(props: IconComponentProps) {
  return <Icon path={mdiRecordRec} {...props} />;
}

export { mdiRecordRec as path };
