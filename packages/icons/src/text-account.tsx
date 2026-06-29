import { mdiTextAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextAccount(props: IconComponentProps) {
  return <Icon path={mdiTextAccount} {...props} />;
}

export { mdiTextAccount as path };
