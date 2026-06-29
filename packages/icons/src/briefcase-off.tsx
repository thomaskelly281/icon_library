import { mdiBriefcaseOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseOff(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseOff} {...props} />;
}

export { mdiBriefcaseOff as path };
