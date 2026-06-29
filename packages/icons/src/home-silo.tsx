import { mdiHomeSilo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSilo(props: IconComponentProps) {
  return <Icon path={mdiHomeSilo} {...props} />;
}

export { mdiHomeSilo as path };
