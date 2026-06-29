import { mdiBriefcaseDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseDownload(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseDownload} {...props} />;
}

export { mdiBriefcaseDownload as path };
