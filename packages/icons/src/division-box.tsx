import { mdiDivisionBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivisionBox(props: IconComponentProps) {
  return <Icon path={mdiDivisionBox} {...props} />;
}

export { mdiDivisionBox as path };
