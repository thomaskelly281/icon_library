import { mdiBriefcaseRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseRemove(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseRemove} {...props} />;
}

export { mdiBriefcaseRemove as path };
