import { mdiBriefcaseSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseSearch(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseSearch} {...props} />;
}

export { mdiBriefcaseSearch as path };
