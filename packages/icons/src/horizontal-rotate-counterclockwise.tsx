import { mdiHorizontalRotateCounterclockwise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HorizontalRotateCounterclockwise(props: IconComponentProps) {
  return <Icon path={mdiHorizontalRotateCounterclockwise} {...props} />;
}

export { mdiHorizontalRotateCounterclockwise as path };
