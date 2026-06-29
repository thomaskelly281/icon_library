import { mdiOdnoklassniki } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Odnoklassniki(props: IconComponentProps) {
  return <Icon path={mdiOdnoklassniki} {...props} />;
}

export { mdiOdnoklassniki as path };
