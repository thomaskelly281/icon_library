import { mdiRecordCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RecordCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiRecordCircleOutline} {...props} />;
}

export { mdiRecordCircleOutline as path };
