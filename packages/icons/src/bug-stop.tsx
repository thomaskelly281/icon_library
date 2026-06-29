import { mdiBugStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugStop(props: IconComponentProps) {
  return <Icon path={mdiBugStop} {...props} />;
}

export { mdiBugStop as path };
