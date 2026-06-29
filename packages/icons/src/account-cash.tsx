import { mdiAccountCash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCash(props: IconComponentProps) {
  return <Icon path={mdiAccountCash} {...props} />;
}

export { mdiAccountCash as path };
