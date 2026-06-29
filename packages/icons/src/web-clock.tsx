import { mdiWebClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebClock(props: IconComponentProps) {
  return <Icon path={mdiWebClock} {...props} />;
}

export { mdiWebClock as path };
