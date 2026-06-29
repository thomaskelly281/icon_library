import { mdiAccountInjury } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountInjury(props: IconComponentProps) {
  return <Icon path={mdiAccountInjury} {...props} />;
}

export { mdiAccountInjury as path };
