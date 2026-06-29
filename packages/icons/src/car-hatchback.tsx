import { mdiCarHatchback } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarHatchback(props: IconComponentProps) {
  return <Icon path={mdiCarHatchback} {...props} />;
}

export { mdiCarHatchback as path };
