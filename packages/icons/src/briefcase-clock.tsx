import { mdiBriefcaseClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseClock(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseClock} {...props} />;
}

export { mdiBriefcaseClock as path };
