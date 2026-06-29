import { mdiAccountTieHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTieHat(props: IconComponentProps) {
  return <Icon path={mdiAccountTieHat} {...props} />;
}

export { mdiAccountTieHat as path };
