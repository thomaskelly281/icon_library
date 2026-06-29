import { mdiFinance } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Finance(props: IconComponentProps) {
  return <Icon path={mdiFinance} {...props} />;
}

export { mdiFinance as path };
