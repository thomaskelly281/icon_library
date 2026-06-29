import { mdiBatteryClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryClock(props: IconComponentProps) {
  return <Icon path={mdiBatteryClock} {...props} />;
}

export { mdiBatteryClock as path };
