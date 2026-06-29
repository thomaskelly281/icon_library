import { mdiHorizontalRotateClockwise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HorizontalRotateClockwise(props: IconComponentProps) {
  return <Icon path={mdiHorizontalRotateClockwise} {...props} />;
}

export { mdiHorizontalRotateClockwise as path };
