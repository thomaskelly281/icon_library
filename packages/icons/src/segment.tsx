import { mdiSegment } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Segment(props: IconComponentProps) {
  return <Icon path={mdiSegment} {...props} />;
}

export { mdiSegment as path };
