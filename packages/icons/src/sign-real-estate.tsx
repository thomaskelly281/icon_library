import { mdiSignRealEstate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignRealEstate(props: IconComponentProps) {
  return <Icon path={mdiSignRealEstate} {...props} />;
}

export { mdiSignRealEstate as path };
