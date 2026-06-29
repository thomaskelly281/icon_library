import { mdiAccountCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCog(props: IconComponentProps) {
  return <Icon path={mdiAccountCog} {...props} />;
}

export { mdiAccountCog as path };
