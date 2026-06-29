import { mdiBedClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedClock(props: IconComponentProps) {
  return <Icon path={mdiBedClock} {...props} />;
}

export { mdiBedClock as path };
