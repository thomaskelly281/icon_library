import { mdiAccountTie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTie(props: IconComponentProps) {
  return <Icon path={mdiAccountTie} {...props} />;
}

export { mdiAccountTie as path };
