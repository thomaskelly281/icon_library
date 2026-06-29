import { mdiAccountMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMinus(props: IconComponentProps) {
  return <Icon path={mdiAccountMinus} {...props} />;
}

export { mdiAccountMinus as path };
