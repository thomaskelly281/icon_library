import { mdiAccountTieWoman } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTieWoman(props: IconComponentProps) {
  return <Icon path={mdiAccountTieWoman} {...props} />;
}

export { mdiAccountTieWoman as path };
