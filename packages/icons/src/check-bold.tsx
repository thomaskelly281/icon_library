import { mdiCheckBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckBold(props: IconComponentProps) {
  return <Icon path={mdiCheckBold} {...props} />;
}

export { mdiCheckBold as path };
