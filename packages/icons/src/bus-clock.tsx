import { mdiBusClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusClock(props: IconComponentProps) {
  return <Icon path={mdiBusClock} {...props} />;
}

export { mdiBusClock as path };
