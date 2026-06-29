import { mdiBriefcaseEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseEye(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseEye} {...props} />;
}

export { mdiBriefcaseEye as path };
