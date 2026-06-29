import { mdiStore24Hour } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Store24Hour(props: IconComponentProps) {
  return <Icon path={mdiStore24Hour} {...props} />;
}

export { mdiStore24Hour as path };
