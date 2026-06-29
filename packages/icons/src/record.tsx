import { mdiRecord } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Record(props: IconComponentProps) {
  return <Icon path={mdiRecord} {...props} />;
}

export { mdiRecord as path };
