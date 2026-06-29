import { mdiBugCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugCheck(props: IconComponentProps) {
  return <Icon path={mdiBugCheck} {...props} />;
}

export { mdiBugCheck as path };
