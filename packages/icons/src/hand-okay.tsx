import { mdiHandOkay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandOkay(props: IconComponentProps) {
  return <Icon path={mdiHandOkay} {...props} />;
}

export { mdiHandOkay as path };
