import { mdiFerrisWheel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FerrisWheel(props: IconComponentProps) {
  return <Icon path={mdiFerrisWheel} {...props} />;
}

export { mdiFerrisWheel as path };
