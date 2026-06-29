import { mdiComma } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Comma(props: IconComponentProps) {
  return <Icon path={mdiComma} {...props} />;
}

export { mdiComma as path };
