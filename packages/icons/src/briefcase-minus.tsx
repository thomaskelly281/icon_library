import { mdiBriefcaseMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseMinus(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseMinus} {...props} />;
}

export { mdiBriefcaseMinus as path };
