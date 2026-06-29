import { mdiHomePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomePlus(props: IconComponentProps) {
  return <Icon path={mdiHomePlus} {...props} />;
}

export { mdiHomePlus as path };
