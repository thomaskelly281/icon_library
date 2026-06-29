import { mdiTie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tie(props: IconComponentProps) {
  return <Icon path={mdiTie} {...props} />;
}

export { mdiTie as path };
