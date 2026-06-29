import { mdiRepeatOnce } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RepeatOnce(props: IconComponentProps) {
  return <Icon path={mdiRepeatOnce} {...props} />;
}

export { mdiRepeatOnce as path };
