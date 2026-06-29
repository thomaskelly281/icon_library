import { mdiBriefcaseAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseAccount(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseAccount} {...props} />;
}

export { mdiBriefcaseAccount as path };
