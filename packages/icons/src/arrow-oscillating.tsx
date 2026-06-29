import { mdiArrowOscillating } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowOscillating(props: IconComponentProps) {
  return <Icon path={mdiArrowOscillating} {...props} />;
}

export { mdiArrowOscillating as path };
