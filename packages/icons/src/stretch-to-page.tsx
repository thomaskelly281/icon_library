import { mdiStretchToPage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StretchToPage(props: IconComponentProps) {
  return <Icon path={mdiStretchToPage} {...props} />;
}

export { mdiStretchToPage as path };
