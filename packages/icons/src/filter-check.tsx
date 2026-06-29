import { mdiFilterCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterCheck(props: IconComponentProps) {
  return <Icon path={mdiFilterCheck} {...props} />;
}

export { mdiFilterCheck as path };
