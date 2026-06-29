import { mdiRecordCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RecordCircle(props: IconComponentProps) {
  return <Icon path={mdiRecordCircle} {...props} />;
}

export { mdiRecordCircle as path };
