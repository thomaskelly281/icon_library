import { mdiAccountCowboyHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCowboyHat(props: IconComponentProps) {
  return <Icon path={mdiAccountCowboyHat} {...props} />;
}

export { mdiAccountCowboyHat as path };
