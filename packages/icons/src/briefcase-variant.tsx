import { mdiBriefcaseVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseVariant(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseVariant} {...props} />;
}

export { mdiBriefcaseVariant as path };
