import { mdiBriefcase } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Briefcase(props: IconComponentProps) {
  return <Icon path={mdiBriefcase} {...props} />;
}

export { mdiBriefcase as path };
