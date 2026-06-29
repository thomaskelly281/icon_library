import { mdiBriefcaseUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseUpload(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseUpload} {...props} />;
}

export { mdiBriefcaseUpload as path };
