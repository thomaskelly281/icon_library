import { mdiHomeMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeMinus(props: IconComponentProps) {
  return <Icon path={mdiHomeMinus} {...props} />;
}

export { mdiHomeMinus as path };
