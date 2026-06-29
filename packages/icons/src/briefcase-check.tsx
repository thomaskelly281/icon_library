import { mdiBriefcaseCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseCheck(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseCheck} {...props} />;
}

export { mdiBriefcaseCheck as path };
