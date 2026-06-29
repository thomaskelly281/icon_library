import { mdiSausage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sausage(props: IconComponentProps) {
  return <Icon path={mdiSausage} {...props} />;
}

export { mdiSausage as path };
