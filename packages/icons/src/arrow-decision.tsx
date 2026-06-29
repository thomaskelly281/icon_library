import { mdiArrowDecision } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDecision(props: IconComponentProps) {
  return <Icon path={mdiArrowDecision} {...props} />;
}

export { mdiArrowDecision as path };
