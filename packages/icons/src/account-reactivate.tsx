import { mdiAccountReactivate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountReactivate(props: IconComponentProps) {
  return <Icon path={mdiAccountReactivate} {...props} />;
}

export { mdiAccountReactivate as path };
