import { mdiBookClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookClock(props: IconComponentProps) {
  return <Icon path={mdiBookClock} {...props} />;
}

export { mdiBookClock as path };
