import { mdiBriefcasePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcasePlus(props: IconComponentProps) {
  return <Icon path={mdiBriefcasePlus} {...props} />;
}

export { mdiBriefcasePlus as path };
