import { mdiBowling } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bowling(props: IconComponentProps) {
  return <Icon path={mdiBowling} {...props} />;
}

export { mdiBowling as path };
